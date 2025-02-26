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

    // if (githfile && file instanceof File) {
      const arrayBuffer = await file.arrayBuffer();
      const base64File = Buffer.from(arrayBuffer).toString('base64');

      attachments.push({
        filename: file.name || 'attachment.pdf', // Default name if missing
        content: base64File,
      });
    // }

    console.log('Email Content:', emailContent, 'Attachments:', attachments);

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
