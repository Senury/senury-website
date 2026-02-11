import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3; // 3 demo requests per hour per IP

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

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
               request.headers.get("x-real-ip") ??
               "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const { name, email, phone, notaryName, message, date, time } = body;

    // Validate required fields
    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Name, email, date, and time are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = phone ? sanitizeInput(phone) : null;
    const sanitizedNotaryName = notaryName ? sanitizeInput(notaryName) : null;
    const sanitizedMessage = message ? sanitizeInput(message) : null;

    // Parse and format date
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Send email
    const { data, error } = await getResend().emails.send({
      from: "Senury Demo <demo@senury.com>",
      to: ["demo@senury.com"],
      replyTo: sanitizedEmail,
      subject: `Neue Demo-Anfrage von ${sanitizedName}`,
      html: `
        <div style="font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
          <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 24px; color: #1a1a1a;">Neue Demo-Anfrage</h1>

          <div style="background: #faf8f7; border: 1px solid #e8e8e8; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b; width: 120px;">Name:</td>
                <td style="padding: 8px 0; font-weight: 500;">${sanitizedName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b;">E-Mail:</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${sanitizedEmail}" style="color: #c9a66b; text-decoration: none;">${sanitizedEmail}</a>
                </td>
              </tr>
              ${sanitizedPhone ? `
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b;">Telefon:</td>
                <td style="padding: 8px 0; font-weight: 500;">${sanitizedPhone}</td>
              </tr>
              ` : ""}
              ${sanitizedNotaryName ? `
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b;">Notariat:</td>
                <td style="padding: 8px 0; font-weight: 500;">${sanitizedNotaryName}</td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b; vertical-align: top;">Termin:</td>
                <td style="padding: 8px 0; font-weight: 500;">${formattedDate} um ${time} Uhr</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b; vertical-align: top;">Anfragezeit:</td>
                <td style="padding: 8px 0;">${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}</td>
              </tr>
            </table>
          </div>

          ${sanitizedMessage ? `
          <div style="background: white; border: 1px solid #e8e8e8; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h2 style="font-size: 16px; font-weight: 600; margin-bottom: 12px; color: #1a1a1a;">Nachricht</h2>
            <p style="line-height: 1.6; color: #6b6b6b; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
          ` : ""}

          <div style="background: #1a1a1a; border-radius: 12px; padding: 24px; color: white;">
            <h2 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Nächste Schritte</h2>
            <ol style="margin: 0; padding-left: 20px; line-height: 1.8; color: #e5e5e5;">
              <li>Prüfen Sie die Verfügbarkeit für den gewünschten Termin</li>
              <li>Senden Sie eine Bestätigungs-E-Mail an den Interessenten</li>
              <li>Fügen Sie den Termin zum Kalender hinzu</li>
            </ol>
          </div>

          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e8e8e8; font-size: 12px; color: #9a9a9a;">
            <p>Diese E-Mail wurde über das Demo-Termin-Formular auf senury.com gesendet.</p>
          </div>
        </div>
      `,
      text: `
Neue Demo-Anfrage

Name: ${sanitizedName}
E-Mail: ${sanitizedEmail}
${sanitizedPhone ? `Telefon: ${sanitizedPhone}\n` : ""}${sanitizedNotaryName ? `Notariat: ${sanitizedNotaryName}\n` : ""}Termin: ${formattedDate} um ${time} Uhr
Anfragezeit: ${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}

${sanitizedMessage ? `Nachricht:\n${sanitizedMessage}\n\n` : ""}---
Diese E-Mail wurde über das Demo-Termin-Formular auf senury.com gesendet.
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Demo request error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
