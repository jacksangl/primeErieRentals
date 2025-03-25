// api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    console.log('Function invoked with body:', JSON.stringify(req.body));
    
    // Check API key availability (redacted for security)
    console.log('Resend API key exists:', !!process.env.RESEND_API_KEY);
    console.log('Resend API key prefix:', process.env.RESEND_API_KEY?.substring(0, 4) + '...');
    
    const { email } = req.body;
    
    if (!email) {
      console.log('Missing email in request body');
      return res.status(400).json({ error: 'Missing email' });
    }
    
    const { data, error } = await resend.emails.send({
      from: 'Prime Erie Rentals <noreply@primeerierentals.com>',
      to: email, 
      subject: 'New Waitlist Signup',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e40af;">Welcome to Prime Erie Rentals!</h1>
          <p>Thank you for joining our waitlist. We've received your request from: <strong>${email}</strong></p>
          <p>We'll notify you as soon as a property becomes available.</p>
          <div style="margin-top: 30px; color: #666; font-size: 14px;">
            Best regards,<br>
            Prime Erie Rentals Team
          </div>
        </div>
      `
    });
    
    if (error) {
      console.error('Resend API error:', error);
      return res.status(400).json({ error });
    }
    
    console.log('Email sent successfully:', data);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Unhandled error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}