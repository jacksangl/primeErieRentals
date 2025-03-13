import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Set up listener for database notifications
export default async function handler(req, res) {
  const channel = supabase
    .channel('new_waitlist_signup')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'emails' }, 
      async (payload) => {
        try {
          // Send email using Resend
          await resend.emails.send({
            from: 'Prime Erie Rentals <onboarding@resend.dev>',
            to: payload.new.email,
            subject: 'Welcome to Prime Erie Rentals Waitlist',
            html: `<p>Thanks for signing up for the waitlist!</p>`
          });
          console.log('Email sent to:', payload.new.email);
        } catch (error) {
          console.error('Failed to send email:', error);
        }
      })
    .subscribe();
  
  res.status(200).json({ message: 'Listener active' });
}