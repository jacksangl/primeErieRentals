// api/send-email.ts (new file name to avoid any caching)
import type { VercelRequest, VercelResponse } from '@vercel/node';
import https from 'https';

// Use direct HTTP request instead of the Resend SDK
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body;
    
    if (!payload?.record?.email) {
      return res.status(400).json({ error: 'Invalid payload - missing email' });
    }

    // Prepare the email data
    const emailData = {
      from: 'Prime Erie Rentals <johnsangl@gmail.com>',
      to: payload.record.email,
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
    };

    // Send email using direct API call instead of SDK
    const result = await sendEmailWithoutSDK(emailData);
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Helper function to send email using Resend API directly
function sendEmailWithoutSDK(emailData: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(emailData);
    
    const options = {
      hostname: 'api.resend.com',
      port: 443,
      path: '/emails',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Length': data.length
      }
    };
    
    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(responseData);
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ success: true, data: parsedData });
          } else {
            resolve({ success: false, error: parsedData });
          }
        } catch (e) {
          reject(new Error('Failed to parse response'));
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.write(data);
    req.end();
  });
}