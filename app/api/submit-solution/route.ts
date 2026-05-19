import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { problem, workaround, frequency, email } = await req.json();

    if (!problem?.trim() || !workaround?.trim() || !frequency?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "ItsSolved.ai <onboarding@resend.dev>",
      to: process.env.RECIPIENT_EMAIL!,
      subject: "New solution request — ItsSolved.ai",
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;color:#333;">
          <h2 style="color:#156064;margin:0 0 28px;">New Solution Request</h2>

          <div style="margin-bottom:24px;">
            <p style="margin:0 0 8px;font-weight:600;color:#156064;">The problem</p>
            <p style="margin:0;line-height:1.6;white-space:pre-wrap;">${problem}</p>
          </div>

          <div style="margin-bottom:24px;">
            <p style="margin:0 0 8px;font-weight:600;color:#156064;">Current workaround</p>
            <p style="margin:0;line-height:1.6;white-space:pre-wrap;">${workaround}</p>
          </div>

          <div style="margin-bottom:24px;">
            <p style="margin:0 0 8px;font-weight:600;color:#156064;">Frequency</p>
            <p style="margin:0;">${frequency}</p>
          </div>

          <div>
            <p style="margin:0 0 8px;font-weight:600;color:#156064;">Contact email</p>
            <p style="margin:0;">${email?.trim() ? email.trim() : "<em style='color:#999;'>Not provided</em>"}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("submit-solution error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
