// api/send-welcome-email.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface WebhookPayload {
  record: {
    email: string;
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body as WebhookPayload;
    
    if (!payload?.record?.email) {
      console.log('Invalid payload:', payload);
      return res.status(400).json({ error: 'Invalid payload - missing email' });
    }

    const email = payload.record.email;
    console.log('Sending welcome email to:', email);

    const { data, error } = await resend.emails.send({
      from: 'Prime Erie Rentals <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Prime Erie Rentals Waitlist',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { color: #1e40af; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
              .content { line-height: 1.6; color: #333; }
              .footer { margin-top: 30px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">Welcome to Prime Erie Rentals!</div>
              <div class="content">
                <p>Thank you for joining our waitlist. We've received your request and will notify you as soon as a unit becomes available.</p>
                <p>If you have any questions, feel free to reply to this email.</p>
              </div>
              <div class="footer">
                Best regards,<br>
                Prime Erie Rentals Team
              </div>
            </div>
          </body>
        </html>
      `
    });

    if (error) {
      console.error('Email error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    console.log('Email sent successfully', data);
    return res.status(200).json({ success: true, message: 'Welcome email sent' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}