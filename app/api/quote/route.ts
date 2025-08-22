import { NextResponse } from "next/server";

type Payload = {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message: string;
};

export async function POST(req: Request) {
  const data = await req.json() as Partial<Payload>;

  // Basic validation (you can expand with zod on the server too)
  if (!data?.name || !data?.phone || !data?.service || !data?.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  // Example "backend" action:
  // 1) Log to server (works locally)
  console.log("New quote request:", data);

  // 2) (Optional) Send an email via an external provider (e.g., Resend, SendGrid)
  //    Provide RESEND_API_KEY and TO_EMAIL in env to enable.
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.TO_EMAIL;

  if (apiKey && toEmail) {
    try {
      // Lightweight email via Resend REST API (no extra npm dep).
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "VR1 <onboarding@resend.dev>",
          to: [toEmail],
          subject: `New VR1 Quote: ${data.service}`,
          text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || ""}\nService: ${data.service}\nMessage: ${data.message}`
        })
      });
      if (!res.ok) {
        console.error("Resend failed", await res.text());
      }
    } catch (e) {
      console.error("Email send error", e);
    }
  }

  // 3) Respond to client
  return NextResponse.json({ ok: true });
}
