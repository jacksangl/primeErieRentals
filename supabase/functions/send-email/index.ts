import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
// @deno-types="https://esm.sh/v135/resend@3.0.0/index.d.ts"
import { Resend } from "https://esm.sh/resend@2.6.0?target=deno";

// Initialize Resend with your API key from the environment
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

/**
 * Generic function to send any email using Resend.
 */
async function sendEmail(to: string, subject: string, html: string) {
  await resend.emails.send({
    from: "Prime Erie Rentals <noreply@primeerierentals.com>",
    to: [to],
    subject,
    html,
  });
}

/**
 * Sends a waitlist confirmation email.
 */
async function sendWaitlistConfirmation(email: string) {
  const subject = "You're on the Waitlist!";
  const html = `
    <div style="font-family: sans-serif; padding: 20px;">
      <h2>Thanks for joining our waitlist!</h2>
      <p>We'll notify you when properties become available.</p>
      <p>Best regards,<br/>Prime Erie Team</p>
    </div>
  `;
  await sendEmail(email, "Waitlist Confirmation", html);
}

// Expose a serverless endpoint that accepts a JSON body.
// If the client sends a "subject" and "html" along with the "email" parameter, a custom email is sent.
// Otherwise, the waitlist confirmation email is sent.
serve(async (req) => {
  const { email } = await req.json();
  try {
    await sendWaitlistConfirmation(email);
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ 
      error: error.message || "Email sending failed" 
    }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}); 