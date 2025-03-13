CREATE TRIGGER trigger_send_welcome_email
AFTER INSERT ON emails
FOR EACH ROW
EXECUTE FUNCTION notify_waitlist_signup();