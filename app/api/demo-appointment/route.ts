import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

let resend: Resend | null = null;

function getResend(): Resend | null {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return null;
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3; // 3 appointment requests per hour per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .trim();
}

function createAppointmentRequestEmail(data: {
  name: string;
  email: string;
  phone: string | null;
  notaryName: string;
  position: string | null;
  message: string | null;
  date: string;
  time: string;
  submittedAt: Date;
}): { html: string; text: string } {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("de-DE", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // HTML version
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #fdfcfb; padding: 30px; border: 1px solid #e8e8e8; border-top: none; }
    .appointment { background: white; border: 1px solid #e8e8e8; border-radius: 8px; padding: 20px; margin-bottom: 20px; text-align: center; }
    .field { margin-bottom: 15px; }
    .label { font-weight: 600; color: #6b6b6b; font-size: 14px; }
    .value { color: #1a1a1a; }
    .footer { text-align: center; padding: 20px; color: #6b6b6b; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Neue Demo-Terminanfrage</h1>
    </div>
    <div class="content">
      <h2 style="margin-top: 0; color: #1a1a1a;">Gewünschter Termin</h2>
      <div class="appointment">
        <div style="font-size: 18px; font-weight: 600; color: #1a1a1a; margin-bottom: 8px;">
          ${formatDate(data.date)}
        </div>
        <div style="font-size: 16px; color: #c9a66b; font-weight: 500;">
          ${data.time} Uhr
        </div>
      </div>

      <h2 style="margin-top: 30px; color: #1a1a1a;">Kontaktdaten</h2>
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">E-Mail</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      ${
        data.phone
          ? `
      <div class="field">
        <div class="label">Telefon</div>
        <div class="value">${data.phone}</div>
      </div>
      `
          : ""
      }
      <div class="field">
        <div class="label">Notariat</div>
        <div class="value">${data.notaryName}</div>
      </div>
      ${
        data.position
          ? `
      <div class="field">
        <div class="label">Position</div>
        <div class="value">${data.position}</div>
      </div>
      `
          : ""
      }
      ${
        data.message
          ? `
      <div class="field">
        <div class="label">Nachricht</div>
        <div class="value">${data.message}</div>
      </div>
      `
          : ""
      }

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e8e8e8; font-size: 14px; color: #6b6b6b;">
        Eingereicht am ${data.submittedAt.toLocaleDateString("de-DE", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })} um ${data.submittedAt.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  })} Uhr
      </div>
    </div>
    <div class="footer">
      Senury Demo-Terminanfrage
    </div>
  </div>
</body>
</html>
  `;

  // Plain text version
  const text = `
Neue Demo-Terminanfrage

GEWÜNSCHTER TERMIN
${formatDate(data.date)} um ${data.time} Uhr

KONTAKTDATEN
Name: ${data.name}
E-Mail: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ""}
Notariat: ${data.notaryName}
${data.position ? `Position: ${data.position}` : ""}
${data.message ? `\nNachricht:\n${data.message}` : ""}

---
Eingereicht am ${data.submittedAt.toLocaleDateString("de-DE")} um ${data.submittedAt.toLocaleTimeString("de-DE")} Uhr
  `;

  return { html, text };
}

function createAppointmentConfirmationEmail(data: {
  name: string;
  date: string;
  time: string;
}): { html: string; text: string } {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("de-DE", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  // HTML version
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #fdfcfb; padding: 30px; border: 1px solid #e8e8e8; border-top: none; }
    .preference { background: white; border: 1px solid #e8e8e8; border-radius: 8px; padding: 12px; margin-bottom: 8px; font-size: 14px; }
    .priority { display: inline-block; width: 24px; height: 24px; background: #1a1a1a; color: white; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold; margin-right: 8px; }
    .footer { text-align: center; padding: 20px; color: #6b6b6b; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Vielen Dank für Ihre Anfrage</h1>
    </div>
    <div class="content">
      <p style="margin-top: 0;">Hallo ${data.name},</p>
      <p>vielen Dank für Ihr Interesse an Senury. Wir haben Ihre Terminanfrage erhalten.</p>

      <h3 style="color: #1a1a1a; margin-bottom: 15px;">Ihr gewünschter Termin:</h3>
      <div style="background: white; border: 1px solid #e8e8e8; border-radius: 8px; padding: 20px; margin-bottom: 20px; text-align: center;">
        <div style="font-size: 16px; font-weight: 600; color: #1a1a1a; margin-bottom: 8px;">
          ${formatDate(data.date)}
        </div>
        <div style="font-size: 14px; color: #c9a66b; font-weight: 500;">
          ${data.time} Uhr
        </div>
      </div>

      <p style="margin-top: 25px;">Wir melden uns <strong>innerhalb von 24 Stunden</strong> mit einer Bestätigung bei Ihnen. Sie erhalten dann auch den Zugangslink für die Videokonferenz.</p>

      <p>Bei Fragen erreichen Sie uns jederzeit unter <a href="mailto:contact@senury.com" style="color: #c9a66b;">contact@senury.com</a>.</p>

      <p style="margin-bottom: 0;">Mit freundlichen Grüßen,<br>Ihr Senury Team</p>
    </div>
    <div class="footer">
      Senury – KI-gestützte Notariatssoftware
    </div>
  </div>
</body>
</html>
  `;

  // Plain text version
  const text = `
Vielen Dank für Ihre Anfrage

Hallo ${data.name},

vielen Dank für Ihr Interesse an Senury. Wir haben Ihre Terminanfrage erhalten.

IHR GEWÜNSCHTER TERMIN:
${formatDate(data.date)} um ${data.time} Uhr

Wir melden uns innerhalb von 24 Stunden mit einer Bestätigung bei Ihnen. Sie erhalten dann auch den Zugangslink für die Videokonferenz.

Bei Fragen erreichen Sie uns jederzeit unter contact@senury.com.

Mit freundlichen Grüßen,
Ihr Senury Team

---
Senury – KI-gestützte Notariatssoftware
  `;

  return { html, text };
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const { name, email, phone, notaryName, position, message, date, time } = body;

    // Validate required fields
    if (!name || !email || !notaryName || !date || !time) {
      return NextResponse.json(
        { error: "Name, E-Mail, Notariat, Datum und Uhrzeit sind erforderlich" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültiges E-Mail-Format" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = phone ? sanitizeInput(phone) : null;
    const sanitizedNotaryName = sanitizeInput(notaryName);
    const sanitizedPosition = position ? sanitizeInput(position) : null;
    const sanitizedMessage = message ? sanitizeInput(message) : null;

    // Check if slot is already booked (if DB is configured)
    const dbConfigured = !!process.env.DATABASE_URL;
    if (dbConfigured) {
      const sql = getDb();

      const existing = await sql`
        SELECT id FROM appointments
        WHERE date = ${date}::date
          AND time = ${time}
          AND status != 'cancelled'
      `;

      if (existing.length > 0) {
        return NextResponse.json(
          { error: "Dieser Termin ist leider bereits vergeben. Bitte wählen Sie einen anderen Zeitpunkt." },
          { status: 409 }
        );
      }
    }

    // Check Resend configuration
    const resendClient = getResend();
    if (!resendClient) {
      return NextResponse.json(
        { error: "E-Mail-Service nicht konfiguriert. Bitte setzen Sie RESEND_API_KEY." },
        { status: 500 }
      );
    }

    // Generate admin notification email
    const { html, text } = createAppointmentRequestEmail({
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      notaryName: sanitizedNotaryName,
      position: sanitizedPosition,
      message: sanitizedMessage,
      date,
      time,
      submittedAt: new Date(),
    });

    // Configure recipient via env var
    const recipient = process.env.EMAIL_RECIPIENT || "contact@senury.com";
    const bcc = process.env.EMAIL_BCC;

    // Send notification to admin
    const { data, error } = await resendClient.emails.send({
      from: "Senury <demo@senury.com>",
      to: [recipient],
      ...(bcc ? { bcc: [bcc] } : {}),
      replyTo: sanitizedEmail,
      subject: `Neue Demo-Terminanfrage von ${sanitizedName}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden" },
        { status: 500 }
      );
    }

    // Save appointment to database (if configured)
    if (dbConfigured) {
      try {
        const sql = getDb();
        await sql`
          INSERT INTO appointments (date, time, name, email, phone, notary_name, position, message)
          VALUES (
            ${date}::date,
            ${time},
            ${sanitizedName},
            ${sanitizedEmail},
            ${sanitizedPhone},
            ${sanitizedNotaryName},
            ${sanitizedPosition},
            ${sanitizedMessage}
          )
        `;
      } catch (dbError) {
        // Log but don't fail — email was already sent
        console.error("Database insert error:", dbError);
      }
    }

    // Send confirmation to user (non-blocking)
    try {
      const { html: confirmHtml, text: confirmText } = createAppointmentConfirmationEmail({
        name: sanitizedName,
        date,
        time,
      });

      await resendClient.emails.send({
        from: "Senury <demo@senury.com>",
        to: [sanitizedEmail],
        subject: "Ihre Demo-Terminanfrage bei Senury",
        html: confirmHtml,
        text: confirmText,
      });
    } catch (confirmError) {
      // Log but don't fail the request if confirmation fails
      console.error("Confirmation email error:", confirmError);
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appointment request error:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
