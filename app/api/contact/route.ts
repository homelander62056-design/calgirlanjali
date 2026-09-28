import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name = "Anonymous",
      phone = "Not provided",
      area = "Pune",
      serviceType = "General Escort Service",
      preferredTime = "As soon as possible",
      message = "",
    } = body;

    // Read credentials from process.env
    const emailUser = process.env.EMAIL_USER || "homelander62056@gmail.com";
    const emailPass = process.env.EMAIL_PASS || "pntjwfycbxsblupn";
    const recipientEmail = process.env.EMAIL_TO || emailUser;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"CalGirl Anjali Leads" <${emailUser}>`,
      to: recipientEmail,
      subject: `🚨 CalGirl Anjali: New Booking Inquiry from ${name} (${area})`,
      html: `
        <div style="font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #fed7aa; border-radius: 16px; background-color: #ffffff;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #fff1f2;">
            <h1 style="color: #e11d48; margin: 0; font-size: 24px; font-weight: 800;">CalGirl Anjali</h1>
            <p style="color: #4b5563; font-size: 14px; margin: 6px 0 0 0;">✨ New Direct Booking / Callback Inquiry</p>
          </div>

          <div style="margin: 20px 0; background-color: #fff1f2; border-left: 4px solid #e11d48; padding: 12px 16px; border-radius: 4px;">
            <p style="margin: 0; color: #9f1239; font-weight: 600; font-size: 14px;">
              You received a new inquiry from the website contact form!
            </p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb; width: 40%;">Client Name:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">Phone / WhatsApp:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #059669; font-weight: bold;">
                <a href="tel:${phone}" style="color: #059669; text-decoration: none;">${phone}</a> 
                &nbsp;|&nbsp; 
                <a href="https://wa.me/${phone.replace(/\\D/g, "")}" style="color: #25D366; text-decoration: underline;">Open WhatsApp</a>
              </td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">Preferred Location / Area:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #e11d48; font-weight: bold;">${area}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">Service Required:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #111827;">${serviceType}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">Preferred Time / Date:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #111827;">${preferredTime}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">Client Message / Note:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #374151;">${message || "None"}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">Submission Time (IST):</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #374151;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
            </tr>
          </table>

          <div style="text-align: center; margin-top: 24px;">
            <a href="tel:${phone}" style="display: inline-block; background-color: #e11d48; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: bold; text-decoration: none; font-size: 14px; margin-right: 10px;">
              📞 Call Client Now
            </a>
            <a href="https://wa.me/${phone.replace(/\\D/g, "")}" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: bold; text-decoration: none; font-size: 14px;">
              💬 WhatsApp Client
            </a>
          </div>
          
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center;">
            This automated email alert was generated by the <strong>CalGirl Anjali</strong> contact enquiry form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received! Our support representative will contact you shortly.",
    });
  } catch (error: any) {
    console.error("Error in contact form route:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
