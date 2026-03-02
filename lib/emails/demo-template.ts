/**
 * Demo Request Email Template
 * Uses the base template for consistent styling
 */

import { createBaseEmailHtml, createBaseEmailText, emailComponents, EmailTemplateProps } from "./base-template";

export interface DemoRequestData {
  name: string;
  email: string;
  phone?: string | null;
  notaryName?: string | null;
  message?: string | null;
  date: string; // ISO string
  time: string;
  submittedAt: Date;
}

export function createDemoRequestEmail(data: DemoRequestData): { html: string; text: string } {
  const { name, email, phone, notaryName, message, date, time, submittedAt } = data;

  // Format date
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
    phone,
    notaryName,
    message,
    formattedDate,
    time,
    dateObj,
  });

  // Build content text
  const contentText = buildContentText({
    name,
    email,
    phone,
    notaryName,
    message,
    formattedDate,
    time,
    formattedSubmittedAt,
  });

  // Create email props (no external action buttons to avoid spam filters)
  const emailProps: EmailTemplateProps = {
    title: "Demo-Termin angefordert",
    subtitle: `Eingegangen am ${formattedSubmittedAt} Uhr`,
    badge: { text: "Neue Anfrage" },
    content: contentHtml,
    // Actions removed - use Reply button in email client instead
    // (mailto: and external calendar links trigger spam filters)
    footer: "Diese E-Mail wurde über das Demo-Termin-Formular auf senury.com gesendet.",
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
  phone?: string | null;
  notaryName?: string | null;
  message?: string | null;
  formattedDate: string;
  time: string;
  dateObj: Date;
}): string {
  const { name, email, phone, notaryName, message, formattedDate, time } = props;

  // Appointment summary card
  let content = emailComponents.appointmentSummary(formattedDate, time);

  // Contact details card (no external mailto links to avoid spam filters)
  const contactRows = [
    emailComponents.infoRow("Name", name),
    emailComponents.infoRow("E-Mail", email),
  ];

  if (phone) {
    contactRows.push(emailComponents.infoRow("Telefon", phone));
  }

  if (notaryName) {
    contactRows.push(emailComponents.infoRow("Notariat", notaryName));
  }

  content += emailComponents.card({
    title: "Kontaktdaten",
    variant: "highlight",
    children: contactRows.join(""),
  });

  // Message card (if present)
  if (message) {
    content += emailComponents.card({
      title: "Nachricht",
      variant: "default",
      children: `<p style="margin: 0; color: #6b6b6b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>`,
    });
  }

  // Next steps
  content += emailComponents.steps([
    "Prüfen Sie die Verfügbarkeit für den gewünschten Termin",
    "Senden Sie eine Bestätigungs-E-Mail an den Interessenten",
    "Fügen Sie den Termin zum Kalender hinzu",
  ]);

  return content;
}

function buildContentText(props: {
  name: string;
  email: string;
  phone?: string | null;
  notaryName?: string | null;
  message?: string | null;
  formattedDate: string;
  time: string;
  formattedSubmittedAt: string;
}): string {
  const { name, email, phone, notaryName, message, formattedDate, time, formattedSubmittedAt } = props;

  let text = `GEWÜNSCHTER TERMIN\n`;
  text += `───────────────────────────────────────────\n`;
  text += `${formattedDate}\n`;
  text += `um ${time} Uhr\n`;
  text += `Videocall\n\n`;

  text += `KONTAKTDATEN\n`;
  text += `───────────────────────────────────────────\n`;
  text += `Name:      ${name}\n`;
  text += `E-Mail:    ${email}\n`;
  if (phone) text += `Telefon:   ${phone}\n`;
  if (notaryName) text += `Notariat:  ${notaryName}\n`;
  text += `\n`;

  text += `ANFRAGEZEITPUNKT\n`;
  text += `───────────────────────────────────────────\n`;
  text += `${formattedSubmittedAt}\n`;

  if (message) {
    text += `\nNACHRICHT\n`;
    text += `───────────────────────────────────────────\n`;
    text += `${message}\n`;
  }

  text += `\nNÄCHSTE SCHRITTE\n`;
  text += `───────────────────────────────────────────\n`;
  text += `1. Prüfen Sie die Verfügbarkeit für den gewünschten Termin\n`;
  text += `2. Senden Sie eine Bestätigungs-E-Mail an den Interessenten\n`;
  text += `3. Fügen Sie den Termin zum Kalender hinzu\n`;

  return text;
}

function createCalendarLink(props: {
  name: string;
  email: string;
  notaryName?: string | null;
  phone?: string | null;
  formattedDate: string;
  time: string;
  dateObj: Date;
}): string {
  const { name, email, notaryName, phone, time } = props;

  // Create Google Calendar link
  const title = encodeURIComponent(`Senury Demo - ${name}`);

  // Parse time to create proper dates (assuming 30 min meeting)
  const [hours, minutes] = time.split(":").map(Number);
  const startDate = new Date(props.dateObj);
  startDate.setHours(hours, minutes, 0, 0);

  const endDate = new Date(startDate);
  endDate.setMinutes(endDate.getMinutes() + 30);

  // Format dates for Google Calendar (UTC)
  const formatDate = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0];

  const details = encodeURIComponent(
    `Demo-Termin mit ${name}\n\n` +
    `${notaryName ? `Notariat: ${notaryName}\n` : ""}` +
    `E-Mail: ${email}\n` +
    `${phone ? `Telefon: ${phone}\n` : ""}`
  );

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${details}`;
}

function escapeHtml(text: string): string {
  const div: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return text.replace(/[&<>"']/g, (m) => div[m] || m);
}