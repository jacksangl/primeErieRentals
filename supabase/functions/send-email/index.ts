import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, subject, html } = req.body;

  try {
    await resend.emails.send({
      from: "Prime Erie Rentals <noreply@primeerierentals.com>",
      to: [email],
      subject: subject ?? "You're on the waitlist!",
      html: html ?? `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Thanks for joining our waitlist!</h2>
          <p>We'll notify you when new properties become available.</p>
          <p>🏠 Your Prime Erie Team</p>
        </div>
      `,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
} 