import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_RECEIVER_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY or CONTACT_RECEIVER_EMAIL." },
      { status: 500 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "School Website <onboarding@resend.dev>",
      to: [toEmail],
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    }),
  });

  if (!response.ok) {
    const data = await response.text();
    return NextResponse.json({ error: data }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
