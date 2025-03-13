// api/send-welcome-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Extract the email from the webhook payload
    const { record } = req.body;
    
    if (!record || !record.email) {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    // Send welcome email
    const { data, error } = await resend.emails.send({
      from: 'Prime Erie Rentals <onboarding@resend.dev>', // Replace with your verified domain when ready
      to: record.email,
      subject: 'Welcome to Prime Erie Rentals Waitlist',
      html: `
        <h1>Welcome to Prime Erie Rentals!</h1>
        <p>Thank you for joining our waitlist. We've received your request and will notify you as soon as a unit becomes available.</p>
        <p>If you have any questions, feel free to reply to this email.</p>
        <p>Best regards,<br>Prime Erie Rentals Team</p>
      `
    });

    if (error) {
      console.error('Email error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, message: 'Welcome email sent' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}