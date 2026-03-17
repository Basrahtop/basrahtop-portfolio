import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["devbasrahtop@gmail.com"],
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #e8e8e8; border: 1px solid #1a1a1a;">
          <h2 style="color: #d4ff00; font-size: 20px; margin-bottom: 8px;">New Portfolio Message</h2>
          <p style="color: #888; font-size: 13px; margin-bottom: 32px; border-bottom: 1px solid #1a1a1a; padding-bottom: 16px;">
            Received via devbasrahtop.com contact form
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px; width: 80px;">Name</td>
              <td style="padding: 10px 0; color: #e8e8e8; font-size: 15px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td>
              <td style="padding: 10px 0;">
                <a href="mailto:${email}" style="color: #d4ff00; font-size: 15px;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="background: #111; border-left: 3px solid #d4ff00; padding: 20px; border-radius: 2px;">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 12px 0;">Message</p>
            <p style="color: #e8e8e8; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #444; font-size: 12px; margin-top: 32px; text-align: center;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
