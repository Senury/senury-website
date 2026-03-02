/**
 * Base Email Template
 * Provides consistent layout and styling for all Senury emails
 */

export interface EmailTemplateProps {
  title: string;
  subtitle?: string;
  badge?: {
    text: string;
    color?: string;
  };
  content: string;
  actions?: {
    primary?: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
  footer?: string;
}

const colors = {
  charcoal: "#1a1a1a",
  charcoalLight: "#2d2d2d",
  warmGray600: "#6b6b6b",
  warmGray400: "#9a9a9a",
  warmGray200: "#e8e8e8",
  warmCream: "#faf8f7",
  warmWhite: "#fdfcfb",
  accent: "#c9a66b",
  white: "#ffffff",
};

export function createBaseEmailHtml(props: EmailTemplateProps): string {
  const { title, subtitle, badge, content, actions, footer } = props;

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${escapeHtml(title)}</title>
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }

    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }

    /* iOS blue links fix */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    /* Gmail iOS font fix */
    u + #body a { color: inherit; text-decoration: none; font-size: inherit; font-weight: inherit; line-height: inherit; }

    /* Samsung Mail fix */
    #MessageViewBody a { color: inherit; text-decoration: none; }

    /* Responsive styles */
    @media screen and (max-width: 600px) {
      .mobile-full-width { width: 100% !important; max-width: 100% !important; }
      .mobile-padding { padding: 24px 16px !important; }
      .mobile-header-padding { padding: 32px 24px 24px !important; }
      .mobile-content-padding { padding: 24px 16px !important; }
      .mobile-footer-padding { padding: 0 16px 24px !important; }
      .mobile-hide { display: none !important; }
      .mobile-stack { display: block !important; width: 100% !important; }
      .mobile-text-center { text-align: center !important; }
      .mobile-font-small { font-size: 20px !important; }
      .mobile-info-stack td {
        display: block !important;
        width: 100% !important;
        padding-bottom: 4px !important;
      }
      .mobile-button {
        display: block !important;
        width: 100% !important;
        margin-right: 0 !important;
        margin-bottom: 12px !important;
        text-align: center !important;
        box-sizing: border-box !important;
      }
    }

    @media screen and (max-width: 400px) {
      .mobile-padding { padding: 16px 12px !important; }
      .mobile-header-padding { padding: 24px 16px 20px !important; }
      .mobile-content-padding { padding: 20px 12px !important; }
    }
  </style>
</head>
<body id="body" style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
      <td class="mobile-padding" style="padding: 40px 20px;">
        <table role="presentation" class="mobile-full-width" cellspacing="0" cellpadding="0" border="0" width="600" align="center" style="max-width: 600px; width: 100%; background: ${colors.white}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td class="mobile-header-padding" style="background: linear-gradient(135deg, ${colors.charcoal} 0%, ${colors.charcoalLight} 100%); padding: 40px 40px 32px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    ${badge ? `
                    <div style="display: inline-block; background: rgba(201, 166, 107, 0.2); border: 1px solid rgba(201, 166, 107, 0.4); border-radius: 20px; padding: 6px 14px; margin-bottom: 16px;">
                      <span style="color: ${colors.accent}; font-size: 11px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase;">${escapeHtml(badge.text)}</span>
                    </div>
                    ` : ""}
                    <h1 class="mobile-font-small" style="margin: 0; color: ${colors.white}; font-size: 28px; font-weight: 600; line-height: 1.3; font-family: Georgia, 'Times New Roman', serif;">${escapeHtml(title)}</h1>
                    ${subtitle ? `<p style="margin: 8px 0 0; color: ${colors.warmGray400}; font-size: 14px;">${escapeHtml(subtitle)}</p>` : ""}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td class="mobile-content-padding" style="padding: 32px 40px;">
              ${content}
            </td>
          </tr>

          <!-- Actions -->
          ${actions ? `
          <tr>
            <td class="mobile-content-padding" style="padding: 0 40px 32px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    ${actions.primary ? `<a href="${actions.primary.href}" class="mobile-button" style="display: inline-block; background: ${colors.charcoal}; color: ${colors.white}; text-decoration: none; padding: 14px 28px; border-radius: 24px; font-size: 14px; font-weight: 500; margin-right: 12px;">${escapeHtml(actions.primary.text)}</a>` : ""}
                    ${actions.secondary ? `<a href="${actions.secondary.href}" class="mobile-button" style="display: inline-block; background: ${colors.white}; color: ${colors.charcoal}; text-decoration: none; padding: 14px 28px; border-radius: 24px; font-size: 14px; font-weight: 500; border: 1px solid ${colors.warmGray200};">${escapeHtml(actions.secondary.text)}</a>` : ""}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ` : ""}

          <!-- Footer -->
          ${footer ? `
          <tr>
            <td class="mobile-footer-padding" style="padding: 0 40px 32px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="border-top: 1px solid ${colors.warmGray200}; padding-top: 24px;">
                    <p style="margin: 0; color: ${colors.warmGray400}; font-size: 12px; line-height: 1.5;">${escapeHtml(footer)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ` : ""}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function createBaseEmailText(props: EmailTemplateProps): string {
  const { title, subtitle, content, actions, footer } = props;

  let text = `═══════════════════════════════════════════\n`;
  text += `SENURY – ${title.toUpperCase()}\n`;
  text += `═══════════════════════════════════════════\n\n`;

  if (subtitle) {
    text += `${subtitle}\n\n`;
  }

  text += content;

  if (actions) {
    text += `\n\n`;
    if (actions.primary) {
      text += `→ ${actions.primary.text}: ${actions.primary.href}\n`;
    }
    if (actions.secondary) {
      text += `→ ${actions.secondary.text}: ${actions.secondary.href}\n`;
    }
  }

  if (footer) {
    text += `\n───────────────────────────────────────────\n${footer}\n`;
  }

  return text;
}

function escapeHtml(text: string): string {
  const div = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return text.replace(/[&<>"']/g, (m) => div[m as keyof typeof div]);
}

// Utility components for building email content
export const emailComponents = {
  card: (props: { title?: string; children: string; variant?: "default" | "highlight" | "dark" }) => {
    const { title, children, variant = "default" } = props;
    const bgColors = {
      default: colors.warmCream,
      highlight: colors.white,
      dark: colors.charcoal,
    };
    const borderColors = {
      default: colors.warmGray200,
      highlight: colors.warmGray200,
      dark: "transparent",
    };
    const textColors = {
      default: colors.charcoal,
      highlight: colors.charcoal,
      dark: colors.white,
    };

    return `
      <table role="presentation" class="mobile-full-width" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: ${bgColors[variant]}; border: 1px solid ${borderColors[variant]}; border-radius: 12px; margin-bottom: 24px;">
        <tr>
          <td style="padding: 24px;">
            ${title ? `<h2 style="margin: 0 0 16px; color: ${textColors[variant]}; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">${escapeHtml(title)}</h2>` : ""}
            ${children}
          </td>
        </tr>
      </table>
    `;
  },

  infoRow: (label: string, value: string, href?: string) => {
    return `
      <table role="presentation" class="mobile-info-stack" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 12px;">
        <tr>
          <td width="100" style="color: ${colors.warmGray400}; font-size: 13px; vertical-align: top; padding-bottom: 4px;">${escapeHtml(label)}</td>
          <td style="color: ${colors.charcoal}; font-size: 15px; font-weight: 500;">
            ${href ? `<a href="${href}" style="color: ${colors.accent}; text-decoration: none;">${escapeHtml(value)}</a>` : escapeHtml(value)}
          </td>
        </tr>
      </table>
    `;
  },

  steps: (steps: string[]) => {
    const stepsHtml = steps.map((step, index) => `
      <tr>
        <td style="padding-bottom: ${index < steps.length - 1 ? "10px" : "0"};">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td style="color: ${colors.accent}; font-size: 14px; font-weight: 600; padding-right: 12px; width: 20px;">${index + 1}</td>
              <td style="color: #e5e5e5; font-size: 14px;">${escapeHtml(step)}</td>
            </tr>
          </table>
        </td>
      </tr>
    `).join("");

    return emailComponents.card({
      title: "Nächste Schritte",
      variant: "dark",
      children: `
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          ${stepsHtml}
        </table>
      `,
    });
  },

  appointmentSummary: (date: string, time: string, type: string = "Videocall") => {
    return `
      <table role="presentation" class="mobile-full-width" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, ${colors.warmCream} 0%, #f5f3f2 100%); border-radius: 12px; border: 1px solid ${colors.warmGray200}; margin-bottom: 24px;">
        <tr>
          <td style="padding: 24px;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
              <tr>
                <td style="padding-bottom: 12px;">
                  <span style="display: inline-flex; align-items: center; gap: 8px; color: ${colors.charcoal}; font-size: 13px; font-weight: 600;">
                    <span style="width: 8px; height: 8px; background: ${colors.accent}; border-radius: 50%; display: inline-block;"></span>
                    Gewünschter Termin
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="mobile-font-small" style="margin: 0 0 4px; color: ${colors.charcoal}; font-size: 20px; font-weight: 600;">${escapeHtml(date)}</p>
                  <p style="margin: 0; color: ${colors.warmGray600}; font-size: 15px;">um ${escapeHtml(time)} Uhr · ${escapeHtml(type)}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
  },
};
