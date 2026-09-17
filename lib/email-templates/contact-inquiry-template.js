/**
 * Email template for general contact inquiries submitted via /contact page
 */
export function getContactInquiryEmailHtml({ name, phone, email, city, subject, message }) {
  const formattedDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Inquiry - The Burger Baba</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F3F4F6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F3F4F6; padding: 30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #E5E7EB;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #111111; padding: 28px 30px; text-align: center; border-bottom: 4px solid #FF5722;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
                THE BURGER BABA
              </h1>
              <p style="color: #FF5722; margin: 4px 0 0 0; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">
                NEW WEBSITE CONTACT INQUIRY
              </p>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="color: #111827; font-size: 18px; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #F3F4F6; padding-bottom: 10px;">
                Inquiry Summary
              </h2>

              <table width="100%" cellspacing="0" cellpadding="0" style="font-size: 14px; color: #374151;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 130px; color: #6B7280;">Full Name:</td>
                  <td style="padding: 8px 0; color: #111827; font-weight: 600;">${name || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #6B7280;">Phone Number:</td>
                  <td style="padding: 8px 0; color: #111827; font-weight: 600;">
                    <a href="tel:${phone}" style="color: #FF5722; text-decoration: none;">${phone || 'N/A'}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #6B7280;">Email Address:</td>
                  <td style="padding: 8px 0; color: #111827;">
                    <a href="mailto:${email}" style="color: #111827; text-decoration: underline;">${email || 'N/A'}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #6B7280;">City / Location:</td>
                  <td style="padding: 8px 0; color: #111827;">${city || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #6B7280;">Inquiry Type:</td>
                  <td style="padding: 8px 0;">
                    <span style="background-color: #FFF7ED; color: #C2410C; border: 1px solid #FFEDD5; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 700;">
                      ${subject || 'General Inquiry'}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Message Box -->
              <div style="margin-top: 24px;">
                <p style="font-size: 13px; font-weight: bold; color: #6B7280; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                  Message / Requirement Details:
                </p>
                <div style="background-color: #F9FAFB; border-left: 4px solid #FF5722; padding: 16px; border-radius: 0 8px 8px 0; color: #1F2937; font-size: 14px; line-height: 1.6;">
                  ${message ? message.replace(/\n/g, '<br />') : '<em>No message details provided.</em>'}
                </div>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F9FAFB; padding: 20px 30px; text-align: center; border-top: 1px solid #E5E7EB; font-size: 12px; color: #9CA3AF;">
              <p style="margin: 0 0 6px 0;">
                Submitted on: <strong>${formattedDate}</strong>
              </p>
              <p style="margin: 0; font-size: 11px;">
                The Burger Baba Corporate HQ • Saket Business Hub, Mehsana, Gujarat
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
