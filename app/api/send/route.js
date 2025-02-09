import { EmailTemplate } from '@/components/emailtemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // // Parse the request body to get form data
    // const {
    //   firstName,
    //   lastName,
    //   email,
    //   company,
    //   phoneNumber,
    //   message,
    //   serviceType,
    //   eventLocation,
    //   size,
    //   file,
      
    // } = await req.json();


    const formData = await req.formData();

    console.log('Received form data:', formData);

    // console.log('Received form data:', {
    //   firstName,
    //   lastName,
    //   email,
    //   company,
    //   phoneNumber,
    //   serviceType,
    //   eventLocation,
    //   size,
    //   file,
    //   message,
    // });

    // Validate required fields
    // if (!email || !message) {
    //   return Response.json({ error: 'Email and message are required.' }, { status: 400 });
    // }

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const company = formData.get('company');
    const phoneNumber = formData.get('phoneNumber');
    const message = formData.get('message');
    const serviceType = formData.get('serviceType');
    const eventLocation = formData.get('eventLocation');
    const size = formData.get('size');
    const file = formData.get('file');

    console.log('Received form data:', {
      firstName,
      lastName,
      email,
      company,
      phoneNumber,
      serviceType,
      eventLocation,
      size,
      file,
      message,
    });


    // Prepare email content using the EmailTemplate component
    const emailContent = EmailTemplate({
      firstName,
      lastName,
      email,
      company,
      phoneNumber,
      serviceType,
      eventLocation,
      size,
      // file,
      message,
    });

    const attachments = file
      ? [
          {
            filename: "attachment.pdf", // Adjust based on file type
            content: file.split("base64,")[1], // Extract Base64 content
          },
        ]
      : [];

      console.log('Email Content:', emailContent,attachments);

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified sender email
      to: 'abhishekabbi.work@gmail.com', // Replace with actual recipient email
      subject: `New Inquiry from ${firstName} ${lastName || ''}`,
      react: emailContent,
      attachments,
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
