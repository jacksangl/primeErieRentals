CREATE OR REPLACE FUNCTION notify_waitlist_signup()
RETURNS trigger AS $$
DECLARE
  payload json;
BEGIN
  payload = json_build_object(
    'email', NEW.email,
    'subject', 'Welcome to Prime Erie Rentals Waitlist',
    'message', 'Hi there,

Thanks for signing up for the waitlist for Prime Erie Rentals! We’ve received your request and will notify you as soon as a unit becomes available.

If you have any questions or would like to update your preferences, feel free to reach out.

We''ll be in touch soon!

Best,
Prime Erie Rentals'
  );
  
  -- Send a notification on channel "new_waitlist_signup"
  PERFORM pg_notify('new_waitlist_signup', payload::text);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;