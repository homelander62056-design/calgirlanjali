import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory click counters
const modelClickCounts: Record<string, number> = {};
let totalClickCount = 0;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name = "General Inquiry", city = "General", whatsappNumber = "918294107610", count: clientCount } = body;

    // Increment click counts
    const modelKey = `${name}_${whatsappNumber}`;
    modelClickCounts[modelKey] = (modelClickCounts[modelKey] || 0) + 1;
    totalClickCount += 1;

    const currentModelCount = clientCount || modelClickCounts[modelKey];

    // Read credentials from .env.local / process.env
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
      from: `"CalGirl Anjali Alerts" <${emailUser}>`,
      to: recipientEmail,
      subject: `🔥 CalGirl Anjali: New WhatsApp Click - ${name} (${city})`,
      html: `
        <div style="font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #fed7aa; border-radius: 16px; background-color: #ffffff;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #fff1f2;">
            <h1 style="color: #e11d48; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">CalGirl Anjali</h1>
            <p style="color: #4b5563; font-size: 14px; margin: 6px 0 0 0;">📲 WhatsApp Click Notification</p>
          </div>

          <div style="margin: 20px 0; background-color: #fff1f2; border-left: 4px solid #e11d48; padding: 12px 16px; border-radius: 4px;">
            <p style="margin: 0; color: #9f1239; font-weight: 600; font-size: 14px;">
              A visitor just clicked the WhatsApp chat button on <strong>calgirlanjali</strong>!
            </p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb; width: 40%;">Website / Brand:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #111827; font-weight: 600;">CalGirl Anjali (calgirlanjali)</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">Model / Profile Name:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #e11d48; font-weight: bold;">${name}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">City / Location:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #111827;">${city || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">Target WhatsApp Number:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #059669; font-weight: bold;">+${whatsappNumber}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">This Model Clicks:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #d97706;">${currentModelCount} clicks</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">Total Site WhatsApp Clicks:</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #4f46e5;">${totalClickCount} clicks</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; color: #374151; border: 1px solid #e5e7eb;">Time (IST):</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb; color: #374151;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
            </tr>
          </table>

          <div style="text-align: center; margin-top: 24px;">
            <a href="https://wa.me/${whatsappNumber}" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: bold; text-decoration: none; font-size: 14px;">
              💬 Open WhatsApp Chat
            </a>
          </div>
          
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center;">
            This automated email was sent by <strong>CalGirl Anjali</strong> system upon a user WhatsApp button click.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Click tracked and email sent successfully",
      count: currentModelCount,
      totalCount: totalClickCount,
    });
  } catch (error: any) {
    console.error("Error in whatsapp-click route:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
