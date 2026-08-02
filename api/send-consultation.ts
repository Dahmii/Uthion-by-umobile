import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the recipient email (Olumide/Uthion intake)
const INTAKE_EMAIL = 'info@uthion.com'; // TODO: Change this to the real intake email
const FROM_EMAIL = 'Uthion Web Submission'; // TODO: Once domain is verified in Resend, change to e.g., 'intake@uthion.com'

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // 1. Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Parse the form data from the request body
  const {
    fullName,
    company,
    email,
    phone,
    industry,
    companySize,
    challenge,
  } = request.body;

  // 3. Basic Validation (Crucial for security and preventing empty emails)
  if (!fullName || !company || !email || !challenge) {
    return response.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    // 4. Send the email using Resend
    const data = await resend.emails.send({
      from: FROM_EMAIL, 
      to: INTAKE_EMAIL,
      subject: `New Consultation Request: ${fullName} (${company})`,
      reply_to: email, // Allows Olumide to click 'Reply' directly
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1C1917;">
          <h2 style="border-bottom: 2px solid #3300FF; padding-bottom: 10px; font-weight: 300;">New Consultation Inquiry</h2>
          
          <p style="margin-top: 20px;">A new consultation request has been submitted via the Uthion website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold; width: 30%;">Full Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;">${fullName}</td>
            }
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold;">Company</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;">${company}</td>
            }
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold;">Work Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;"><a href="mailto:${email}" style="color: #3300FF;">${email}</a></td>
            }
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;">${phone}</td>
            }
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold;">Industry</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;">${industry}</td>
            }
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4; font-weight: bold;">Company Size</td>
              <td style="padding: 10px; border-bottom: 1px solid #E7E5E4;">${companySize}</td>
            }
          </table>

          <div style="margin-top: 30px; background-color: #F5F5F4; p: 20px; border-radius: 8px;">
            <h4 style="margin-top: 0;">Business Challenge/Objective:</h4>
            <p style="white-space: pre-wrap; color: #44403C; line-height: 1.6;">${challenge}</p>
          </div>

          <p style="margin-top: 40px; text-align: center; font-size: 12px; color: #78716C;">
            This request was submitted via Uthion Website.
          </p>
        </div>
      `,
    });

    // 5. Return success response to the frontend
    return response.status(200).json({ message: 'Email sent successfully', id: data.id });
    
  } catch (error) {
    // 6. Handle errors gracefully
    console.error('Error sending email:', error);
    return response.status(500).json({ error: 'Failed to send inquiry.' });
  }
}