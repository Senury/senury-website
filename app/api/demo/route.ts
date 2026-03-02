import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { createDemoRequestEmail } from "@/lib/emails/demo-template";

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

    // Format date for confirmation email
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Check Resend configuration
    const resendClient = getResend();
    if (!resendClient) {
      return NextResponse.json(
        { error: "Email service not configured. Please set RESEND_API_KEY environment variable." },
        { status: 500 }
      );
    }

    // Generate email using template
    const { html, text } = createDemoRequestEmail({
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      notaryName: sanitizedNotaryName,
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
      subject: `Neue Demo-Anfrage von ${sanitizedName}`,
      html,
      text,
    });

    // Send confirmation to user (non-blocking)
    try {
      const { createConfirmationEmail } = await import("@/lib/emails/confirmation-template");
      const { html: confirmHtml, text: confirmText } = createConfirmationEmail({
        name: sanitizedName,
        type: "demo",
        details: {
          date: formattedDate,
          time,
          type: "Videocall",
        },
      });

      await resendClient.emails.send({
        from: "Senury <demo@senury.com>",
        to: [sanitizedEmail],
        subject: "Ihre Demo-Anfrage bei Senury",
        html: confirmHtml,
        text: confirmText,
      });
    } catch (confirmError) {
      // Log but don't fail the request if confirmation fails
      console.error("Confirmation email error:", confirmError);
    }

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
