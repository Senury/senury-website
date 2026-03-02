/**
 * Contact Form Email Template
 * Uses the base template for consistent styling
 */

import { createBaseEmailHtml, createBaseEmailText, emailComponents, EmailTemplateProps } from "./base-template";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string | null;
  message: string;
  submittedAt: Date;
}

export function createContactEmail(data: ContactFormData): { html: string; text: string } {
  const { name, email, company, message, submittedAt } = data;

  const formattedSubmittedAt = submittedAt.toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Build content HTML
  const contentHtml = buildContentHtml({
    name,
    email,
    company,
    message,
  });

  // Build content text
  const contentText = buildContentText({
    name,
    email,
    company,
    message,
    formattedSubmittedAt,
  });

  // Create email props
  const emailProps: EmailTemplateProps = {
    title: "Neue Kontaktanfrage",
    subtitle: `Eingegangen am ${formattedSubmittedAt} Uhr`,
    badge: { text: "Neue Anfrage" },
    content: contentHtml,
    footer: "Diese E-Mail wurde über das Kontaktformular auf senury.com gesendet.",
  };

  return {
    html: createBaseEmailHtml(emailProps),
    text: createBaseEmailText({
      ...emailProps,
      content: contentText,
    }),
  };
}

function buildContentHtml(props: {
  name: string;
  email: string;
  company?: string | null;
  message: string;
}): string {
  const { name, email, company, message } = props;

  // Contact details card
  const contactRows = [
    emailComponents.infoRow("Name", name),
    emailComponents.infoRow("E-Mail", email),
  ];

  if (company) {
    contactRows.push(emailComponents.infoRow("Unternehmen", company));
  }

  let content = emailComponents.card({
    title: "Kontaktdaten",
    variant: "highlight",
    children: contactRows.join(""),
  });

  // Message card
  content += emailComponents.card({
    title: "Nachricht",
    variant: "default",
    children: `<p style="margin: 0; color: #6b6b6b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>`,
  });

  return content;
}

function buildContentText(props: {
  name: string;
  email: string;
  company?: string | null;
  message: string;
  formattedSubmittedAt: string;
}): string {
  const { name, email, company, message, formattedSubmittedAt } = props;

  let text = `KONTAKTDATEN\n`;
  text += `───────────────────────────────────────────\n`;
  text += `Name:      ${name}\n`;
  text += `E-Mail:    ${email}\n`;
  if (company) text += `Unternehmen: ${company}\n`;
  text += `\n`;

  text += `ANFRAGEZEITPUNKT\n`;
  text += `───────────────────────────────────────────\n`;
  text += `${formattedSubmittedAt}\n`;

  text += `\nNACHRICHT\n`;
  text += `───────────────────────────────────────────\n`;
  text += `${message}\n`;

  return text;
}

function escapeHtml(text: string): string {
  const div: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return text.replace(/[&<>"']/g, (m) => div[m] || m);
}
