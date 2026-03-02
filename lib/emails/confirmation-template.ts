/**
 * Confirmation Email Template
 * Sent to users after submitting contact/demo forms
 */

import { createBaseEmailHtml, createBaseEmailText, EmailTemplateProps } from "./base-template";

export interface ConfirmationData {
  name: string;
  type: "demo" | "contact";
  details?: {
    date?: string;
    time?: string;
    type?: string;
  };
}

export function createConfirmationEmail(data: ConfirmationData): { html: string; text: string } {
  const { name, type, details } = data;

  const firstName = name.split(" ")[0];

  const title = type === "demo"
    ? "Ihre Demo-Anfrage ist bei uns eingegangen"
    : "Vielen Dank für Ihre Nachricht";

  const subtitle = type === "demo"
    ? "Wir melden uns innerhalb von 24 Stunden bei Ihnen."
    : "Wir werden Ihre Anfrage schnellstmöglich bearbeiten.";

  // Build content based on type
  const contentHtml = type === "demo" && details
    ? buildDemoConfirmationHtml(firstName, details)
    : buildContactConfirmationHtml(firstName);

  const contentText = type === "demo" && details
    ? buildDemoConfirmationText(firstName, details)
    : buildContactConfirmationText(firstName);

  const emailProps: EmailTemplateProps = {
    title,
    subtitle,
    content: contentHtml,
    footer: "Diese E-Mail wurde automatisch versendet. Bei Fragen antworten Sie einfach auf diese Nachricht.",
  };

  return {
    html: createBaseEmailHtml(emailProps),
    text: createBaseEmailText({
      ...emailProps,
      content: contentText,
    }),
  };
}

function buildDemoConfirmationHtml(
  firstName: string,
  details: { date?: string; time?: string; type?: string }
): string {
  const { date, time, type } = details;

  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #faf8f7 0%, #f5f3f2 100%); border-radius: 12px; border: 1px solid #e8e8e8; margin-bottom: 24px;">
      <tr>
        <td style="padding: 24px;">
          <p style="margin: 0 0 16px; color: #1a1a1a; font-size: 15px; line-height: 1.6;">
            Hallo ${escapeHtml(firstName)},
          </p>
          <p style="margin: 0 0 16px; color: #6b6b6b; font-size: 15px; line-height: 1.6;">
            vielen Dank für Ihr Interesse an Senury. Wir haben Ihre Demo-Anfrage erhalten.
          </p>

          ${date && time ? `
          <div style="background: white; border-radius: 8px; padding: 16px; margin: 16px 0;">
            <p style="margin: 0 0 8px; color: #9a9a9a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Gewünschter Termin</p>
            <p style="margin: 0 0 4px; color: #1a1a1a; font-size: 18px; font-weight: 600;">${escapeHtml(date)}</p>
            <p style="margin: 0; color: #6b6b6b; font-size: 14px;">um ${escapeHtml(time)} Uhr${type ? ` · ${escapeHtml(type)}` : ""}</p>
          </div>
          ` : ""}

          <p style="margin: 0; color: #6b6b6b; font-size: 15px; line-height: 1.6;">
            Wir prüfen aktuell die Verfügbarkeit und melden uns bei Ihnen mit einer Terminbestätigung.
          </p>
        </td>
      </tr>
    </table>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #1a1a1a; border-radius: 12px; margin-bottom: 24px;">
      <tr>
        <td style="padding: 24px;">
          <h3 style="margin: 0 0 16px; color: #ffffff; font-size: 14px; font-weight: 600;">Was erwartet Sie?</h3>
          <ul style="margin: 0; padding-left: 20px; color: #e5e5e5; font-size: 14px; line-height: 1.8;">
            <li>Persönliche 1:1-Führung durch die Software</li>
            <li>Beantwortung Ihrer spezifischen Fragen</li>
            <li>Keine Verpflichtung, keine versteckten Kosten</li>
          </ul>
        </td>
      </tr>
    </table>
  `;
}

function buildContactConfirmationHtml(firstName: string): string {
  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #faf8f7 0%, #f5f3f2 100%); border-radius: 12px; border: 1px solid #e8e8e8; margin-bottom: 24px;">
      <tr>
        <td style="padding: 24px;">
          <p style="margin: 0 0 16px; color: #1a1a1a; font-size: 15px; line-height: 1.6;">
            Hallo ${escapeHtml(firstName)},
          </p>
          <p style="margin: 0 0 16px; color: #6b6b6b; font-size: 15px; line-height: 1.6;">
            wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.
          </p>
          <p style="margin: 0; color: #6b6b6b; font-size: 15px; line-height: 1.6;">
            In dringenden Fällen erreichen Sie uns auch direkt unter <a href="mailto:contact@senury.com" style="color: #c9a66b; text-decoration: none;">contact@senury.com</a>.
          </p>
        </td>
      </tr>
    </table>
  `;
}

function buildDemoConfirmationText(
  firstName: string,
  details: { date?: string; time?: string; type?: string }
): string {
  const { date, time, type } = details;

  let text = `Hallo ${firstName},\n\n`;
  text += `vielen Dank für Ihr Interesse an Senury. Wir haben Ihre Demo-Anfrage erhalten.\n\n`;

  if (date && time) {
    text += `GEWÜNSCHTER TERMIN\n`;
    text += `───────────────────────────────────────────\n`;
    text += `${date}\n`;
    text += `um ${time} Uhr${type ? ` · ${type}` : ""}\n\n`;
  }

  text += `Wir prüfen aktuell die Verfügbarkeit und melden uns bei Ihnen mit einer Terminbestätigung.\n\n`;

  text += `WAS ERWARTET SIE?\n`;
  text += `───────────────────────────────────────────\n`;
  text += `• Persönliche 1:1-Führung durch die Software\n`;
  text += `• Beantwortung Ihrer spezifischen Fragen\n`;
  text += `• Keine Verpflichtung, keine versteckten Kosten\n`;

  return text;
}

function buildContactConfirmationText(firstName: string): string {
  let text = `Hallo ${firstName},\n\n`;
  text += `wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.\n\n`;
  text += `In dringenden Fällen erreichen Sie uns auch direkt unter contact@senury.com.`;

  return text;
}

function escapeHtml(text: string): string {
  const div: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return text.replace(/[&<>"']/g, (m) => div[m] || m);
}
