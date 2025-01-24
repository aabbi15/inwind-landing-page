import { EmailTemplate } from '@/components/emailtemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Parse the request body to get form data
    const { firstName, lastName, company, email, phoneNumber, message } = await req.json();

    // Validate required fields
    if (!email || !message) {
      return Response.json({ error: 'Email and message are required.' }, { status: 400 });
    }

    // Create the email content using the EmailTemplate component
    const emailContent = EmailTemplate({
      firstName,
      lastName,
      company,
      email,
      phoneNumber,
      message,
    });

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified sender email
      to: 'abhishekabbi.work@gmail.com', // You can adjust this to send to a specific recipient
      subject: `Message from ${firstName} ${lastName || ''}`, // Customize the subject line
      react: emailContent, // Pass the React-based email content
    });

    // Check for errors in the Resend API response
    if (error) {
      console.error('Error sending email:', error);
      return Response.json({ error }, { status: 500 });
    }

    // Return success response
    return Response.json({ message: 'Email sent successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
