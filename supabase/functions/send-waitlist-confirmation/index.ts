import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Missing email address' });
  }

  try {
    await resend.emails.send({
      from: "Prime Erie Rentals <noreply@primeerierentals.com>",
      to: [email],
      subject: "You're on the waitlist!",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Thanks for joining our waitlist!</h2>
          <p>We'll notify you when new properties become available.</p>
          <p>🏠 Your Prime Erie Team</p>
        </div>
      `,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: String(error) });
  }
} 