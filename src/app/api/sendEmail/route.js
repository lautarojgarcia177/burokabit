import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  auth: {
    user: process.env.BUROKABIT_EMAIL_USER,
    pass: process.env.BUROKABIT_EMAIL_PASS,
  },
});

export async function POST(request) {
  const { email, subject, message } = await request.json();

  const mailOptions = {
    from: email,
    to: process.env.BUROKABIT_EMAIL_ADDRESS,
    subject,
    message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}
