import { serve } from "deno";
import { Resend } from "./resend.js";


const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(async (req) => {
  const { email } = await req.json();

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
      `
    });

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}); 