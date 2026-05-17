import { Resend } from 'resend';

// Vercel serverless functions environment variables are available in process.env
const resend = new Resend(process.env.RESEND_API_KEY); 
// NOTE: Must set RESEND_API_KEY in Vercel environment variables for production.

const getEmailTemplate = (contentHTML: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      background-color: #050505;
      color: #e5e5e5;
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .email-wrapper {
      background-color: #050505;
      padding: 40px 20px;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #0a0a0a;
      border: 1px solid #222;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background-color: #111;
      padding: 40px 20px;
      text-align: center;
      border-bottom: 3px solid #d4af37;
    }
    .header h1 {
      margin: 0;
      color: #fff;
      font-family: 'Times New Roman', Times, serif;
      font-size: 28px;
      letter-spacing: 4px;
      text-transform: uppercase;
    }
    .content {
      padding: 40px 30px;
      line-height: 1.6;
      font-size: 16px;
      color: #cccccc;
    }
    .content h2 {
      color: #d4af37;
      margin-top: 0;
      font-family: 'Times New Roman', Times, serif;
      letter-spacing: 1px;
    }
    .content p {
      margin-bottom: 20px;
    }
    .content ul {
      background: #111;
      padding: 20px 20px 20px 40px;
      border-radius: 4px;
      border-left: 2px solid #8b0000;
    }
    .content li {
      margin-bottom: 10px;
    }
    .content strong {
      color: #fff;
    }
    .footer {
      background-color: #111;
      padding: 30px 20px;
      text-align: center;
      font-size: 12px;
      color: #666;
      border-top: 1px solid #222;
    }
    .highlight {
      color: #d4af37;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <div class="header">
        <h1>Steven Tyler</h1>
      </div>
      <div class="content">
        ${contentHTML}
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} Steven Tyler Official. All Rights Reserved.</p>
        <p>This is an automated message. Please do not reply directly to this email unless instructed otherwise.</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, data } = req.body;

  if (!type || !data) {
    return res.status(400).json({ error: 'Missing type or data in request body' });
  }

  try {
    let visitorEmailOptions;
    let adminEmailOptions;

    switch (type) {
      case 'newsletter':
        if (!data.email) return res.status(400).json({ error: 'Email is required' });
        
        visitorEmailOptions = {
          from: 'Steven Tyler Management <management@steventylerofficial.com>',
          to: data.email,
          subject: 'Welcome to the Steven Tyler Newsletter',
          html: getEmailTemplate(`
            <h2>Welcome!</h2>
            <p>Thank you for subscribing to the official Steven Tyler newsletter!</p>
            <p>You will now be among the first to receive exclusive updates, tour news, and more straight from Steven Tyler Management.</p>
          `)
        };

        adminEmailOptions = {
          from: 'Steven Tyler Management <management@steventylerofficial.com>',
          to: 'management@steventylerofficial.com',
          subject: 'New Newsletter Subscriber',
          html: getEmailTemplate(`
            <h2>New Subscriber Alert</h2>
            <p>A new user has subscribed to the newsletter:</p>
            <ul>
              <li><strong>Email:</strong> ${data.email}</li>
            </ul>
          `)
        };
        break;

      case 'fanclub':
        if (!data.email || !data.name) return res.status(400).json({ error: 'Email and Name are required' });
        
        visitorEmailOptions = {
          from: 'Steven Tyler Management <management@steventylerofficial.com>',
          to: data.email,
          subject: 'Action Required: Complete Your Fanclub Registration',
          html: getEmailTemplate(`
            <h2>Hi ${data.name},</h2>
            <p>Thank you for your interest in joining the exclusive Steven Tyler fanbase.</p>
            <p>To complete your registration, please <strong>reply to this email</strong> with the following information:</p>
            <ul>
              <li>Your full name</li>
              <li>A recent photograph</li>
              <li>Your phone number</li>
            </ul>
            <p>Please note: It is mandatory for all fanclub members to pay a fee of <strong class="highlight">$3,000</strong>, which will be donated entirely to Janie's Fund.</p>
            <p>Payment instructions will be provided once you submit the required details above.</p>
            <br/>
            <p>Best regards,<br/><strong>Steven Tyler Management</strong></p>
          `)
        };

        adminEmailOptions = {
          from: 'Steven Tyler Management <management@steventylerofficial.com>',
          to: 'management@steventylerofficial.com',
          subject: 'New Fanclub Registration Request',
          html: getEmailTemplate(`
            <h2>New Fanclub Registration</h2>
            <p>A new user has requested to join the fanclub. They have been prompted to reply with their details.</p>
            <ul>
              <li><strong>Name:</strong> ${data.name}</li>
              <li><strong>Email:</strong> ${data.email}</li>
            </ul>
          `)
        };
        break;

      case 'contact':
        if (!data.email || !data.name) return res.status(400).json({ error: 'Email and Name are required' });
        
        visitorEmailOptions = {
          from: 'Steven Tyler Management <management@steventylerofficial.com>',
          to: data.email,
          subject: 'Thank You for Contacting Us',
          html: getEmailTemplate(`
            <h2>Hi ${data.name},</h2>
            <p>Thank you for contacting us. We have received your message and a reply will be given to you shortly.</p>
            <p>If you wish to contact Steven directly, please email him at: <strong class="highlight">steven@steventylerofficial.com</strong>.</p>
            <br/>
            <p>Best regards,<br/><strong>Steven Tyler Management</strong></p>
          `)
        };

        adminEmailOptions = {
          from: 'Steven Tyler Management <management@steventylerofficial.com>',
          to: 'management@steventylerofficial.com',
          subject: `New Contact Submission: ${data.subject || 'No Subject'}`,
          html: getEmailTemplate(`
            <h2>New Contact Form Submission</h2>
            <p>A new message was received from the website contact form:</p>
            <ul>
              <li><strong>Name:</strong> ${data.name}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Subject:</strong> ${data.subject || 'N/A'}</li>
              <li><strong>Message:</strong> ${data.message || 'N/A'}</li>
            </ul>
          `)
        };
        break;

      case 'donation':
        if (!data.email || !data.name || !data.amount) return res.status(400).json({ error: 'Email, Name, and Amount are required' });
        
        visitorEmailOptions = {
          from: 'Steven Tyler Management <management@steventylerofficial.com>',
          to: data.email,
          subject: "Thank You for Your Pledge to Janie's Fund",
          html: getEmailTemplate(`
            <h2>Hi ${data.name},</h2>
            <p>Thank you so much for your generous pledge of <strong class="highlight">$${data.amount}</strong> to Janie's Fund.</p>
            <p>Your support helps bring hope and healing to girls who have suffered the trauma of abuse and neglect.</p>
            <p>A payment account and further instructions will be provided for you shortly to complete your donation.</p>
            <br/>
            <p>With gratitude,<br/><strong>Steven Tyler Management</strong></p>
          `)
        };

        adminEmailOptions = {
          from: 'Steven Tyler Management <management@steventylerofficial.com>',
          to: 'rebecca@steventylerofficial.com',
          subject: 'New Donation Pledge Received',
          html: getEmailTemplate(`
            <h2>New Janie's Fund Pledge</h2>
            <p>A new donation pledge has been submitted from the website:</p>
            <ul>
              <li><strong>Name:</strong> ${data.name}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Phone:</strong> ${data.phone || 'N/A'}</li>
              <li><strong>Pledged Amount:</strong> <span class="highlight">$${data.amount}</span></li>
              <li><strong>Message:</strong> ${data.message || 'N/A'}</li>
            </ul>
          `)
        };
        break;

      default:
        return res.status(400).json({ error: 'Invalid type' });
    }

    // Send emails in parallel
    const emailPromises = [
      resend.emails.send(visitorEmailOptions)
    ];

    if (adminEmailOptions) {
      emailPromises.push(resend.emails.send(adminEmailOptions));
    }

    await Promise.all(emailPromises);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
