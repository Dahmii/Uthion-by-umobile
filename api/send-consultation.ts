import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const INTAKE_EMAIL = 'info@uthion.com'; 
const FROM_EMAIL = 'Uthion Web Submission <notification@uthion.com>';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  // Support both key aliases sent by the frontend
  const {
    fullName,
    company,
    email,
    workEmail,
    phone,
    industry,
    companySize,
    timeline,
    challenge,
    projectOverview,
  } = request.body;

  // Resolve values regardless of key names used
  const clientEmail = email || workEmail;
  const clientChallenge = challenge || projectOverview;
  const clientSize = companySize || timeline || 'N/A';

  // Basic Validation using resolved variables
  if (!fullName || !company || !clientEmail || !clientChallenge) {
    return response.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL, 
      to: INTAKE_EMAIL,
      subject: `New Consultation Request: ${fullName} (${company})`,
      replyTo: clientEmail,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1C1917;">
          <h2 style="border-bottom: 2px solid #3300FF; padding-bottom: 10px; font-weight: 300;">New Consultation Inquiry</h2>
          
          <p style="margin-top: 20px;">A new consultation request has been submitted via the Uthion website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold; width: 30%;">Full Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold;">Company</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold;">Work Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;"><a href="mailto:${clientEmail}" style="color: #3300FF;">${clientEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold;">Industry</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;">${industry || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold;">Company Size</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;">${clientSize}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; background-color: #F5F5F4; padding: 20px; border-radius: 8px;">
            <h4 style="margin-top: 0;">Business Challenge/Objective:</h4>
            <p style="white-space: pre-wrap; color: #44403C; line-height: 1.6;">${clientChallenge}</p>
          </div>

          <p style="margin-top: 40px; text-align: center; font-size: 12px; color: #78716C;">
            This request was submitted via Uthion Website.
          </p>
        </div>
      `,
    });

    return response.status(200).json({ message: 'Email sent successfully', id: data.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return response.status(500).json({ error: 'Failed to send inquiry.' });
  }
}