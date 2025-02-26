import { EmailTemplate } from '@/components/emailtemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const company = formData.get('company');
    const phoneNumber = formData.get('phoneNumber');
    const message = formData.get('message');
    const serviceType = formData.get('serviceType');
    const eventLocation = formData.get('eventLocation');
    const size = formData.get('size');
    const file = formData.get('file'); // This might be `null` or `undefined`

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

    // Prepare email content
    const emailContent = EmailTemplate({
      firstName,
      lastName,
      email,
      company,
      phoneNumber,
      serviceType,
      eventLocation,
      size,
      message,
    });

    let attachments = [];

if (file && typeof file === 'string') {
  // Case 1: Handle base64 string (e.g., data URL)
  if (file.startsWith('data:')) {
    // If the file is a base64 encoded string (e.g., an image or PDF)
    attachments.push({
      filename: 'attachment.pdf', // Or set a name based on the context
      content: file.split(',')[1], // Base64 string content
    });
  }
  // Case 2: Handle file URL or path string
  else if (file.startsWith('http')) {
    // If the file is a URL, fetch it
    const response = await fetch(file);
    const arrayBuffer = await response.arrayBuffer();
    const base64File = Buffer.from(arrayBuffer).toString('base64');
    
    attachments.push({
      filename: 'attachment.pdf', // Change to actual filename if available
      content: base64File,
    });
  } else {
    console.log('Received file as a plain string:', file);
    // Handle plain string (file name or description)
  }
}

console.log('Attachments:', attachments);


    // Construct email options
    const emailOptions = {
      from: 'onboarding@resend.dev',
      to: 'info@expoessentials.in',
      subject: `New Inquiry from ${firstName} ${lastName || ''}`,
      react: emailContent,
    };

    // Only add attachments if there is a valid file
    if (attachments.length > 0) {
      emailOptions.attachments = attachments;
    }

    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error('Error sending email:', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ message: 'Email sent successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
