# VR1 — Next.js + Tailwind + Framer Motion

A full-stack landing site for VR1 (Delhi NCR services) with:
- Next.js (App Router, TypeScript)
- Tailwind CSS
- Framer Motion animations
- Backend API route `/api/quote` to accept form submissions
- Optional email sending using Resend (no extra deps)

## Quick start

```bash
# 1) Extract and install
npm install

# 2) Run dev
npm run dev
```

Open http://localhost:3000

## Configure Tailwind (already set)
- `app/globals.css`
- `tailwind.config.ts` with content paths

## Environment (optional email)
Create `.env.local` with:
```
RESEND_API_KEY=your_resend_key
TO_EMAIL=you@example.com
```

If these are not set, the backend will still work (it logs to server).

## Deploy
- Push to GitHub and import in Vercel.
- Set env vars in Vercel Project Settings if you want email notifications.
- For a custom domain, consider `vr1services.in` or similar.

## Customize
- Update phone/email in `app/page.tsx` About section and Navbar Call Now button.
- Edit services in `lib/services.ts`.
- Design accents via Tailwind tokens in `tailwind.config.ts`.
```

