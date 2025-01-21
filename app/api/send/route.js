import { NextResponse, NextRequest} from "next/server";
import { Resend } from "resend";


import { transporter,mailoptions } from '@/lib/nodemailer.js';

const resend = new Resend("1234");
// const fromEmail = process.env.FROM_EMAIL;
const fromEmail = process.env.MY_MAIL;

export async function POST(req) {
  const { email, subject, msg } = await req.json();
  const user = {email,subject,msg}
  console.log(user+'routeuser');

  try {
    await transporter.sendMail({
      ...mailoptions,
      subject: "New portfolio message",
      text: "this is a test",
      html: `<h2> Sender email: ${email}</h2> <h1> ${subject}</h1> <h3> message:${msg} </h3>`
            
  })

  return NextResponse.json({msg:"sucess"},{status:200})
    
  } catch (error) {
    return NextResponse.json({error},{status:200})
  }



}





export async function POST(req) {
  try {
    // Parse the incoming request body
    const { firstName, lastName, company, email, phoneNumber, message } = await req.json();

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { message: "Email and message are required." },
        { status: 400 }
      );
    }

    // Construct the HTML email content
    const emailContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Send the email using Resend
    const response = await resend.emails.send({
      from: process.env.MY_MAIL, // Sender's email address
      to: process.env.RECIPIENT_EMAIL, // Recipient's email address
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: emailContent,
    });

    console.log("Email sent successfully:", response);

    // Return success response
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);

    // Return error response
    return NextResponse.json(
      { message: "Failed to send email.", error: error.message },
      { status: 500 }
    );
  }
}
