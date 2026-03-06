# STANDARD SCHOOLS, ILORIN Website (Next.js)

Mobile-first marketing website for a Nigerian primary + secondary school.

## 1) Project Setup Commands

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 2) Stack

- Next.js App Router + React + TypeScript
- TailwindCSS v4
- `shadcn/ui`-style component structure under `src/components/ui`
- Content managed from local files in `src/content`

## 3) Folder Structure

```text
src/
  app/
    about/page.tsx
    academics/page.tsx
    admissions/page.tsx
    activities/page.tsx
    activities/[slug]/page.tsx
    gallery/page.tsx
    contact/page.tsx
    api/contact/route.ts
    layout.tsx
    page.tsx
    sitemap.ts
    robots.ts
  components/
    activities/
    gallery/
    home/
    layout/
    ui/
  content/
    activities.ts
    gallery.ts
    school.ts
    testimonials.ts
  lib/
    utils.ts
public/
  images/
  documents/
```

## 4) Content Management (No CMS)

Update these files:

- `src/content/activities.ts`
- `src/content/gallery.ts`
- `src/content/testimonials.ts`
- `src/content/school.ts`

### Add a new activity/news post

In `src/content/activities.ts`, add a new object:

```ts
{
  slug: "your-activity-slug",
  title: "Your Activity Title",
  date: "2026-02-20",
  category: "Events",
  excerpt: "Short summary",
  coverImage: "/images/activities/your-image.jpg",
  images: ["/images/activities/your-image.jpg"],
  content: ["Paragraph 1", "Paragraph 2"]
}
```

### Add gallery photos

1. Put image files in `public/images/gallery/`
2. Add entries to `src/content/gallery.ts`:

```ts
{ src: "/images/gallery/new-photo.jpg", alt: "Description", category: "Events" }
```

## 5) Contact Form Options

### Option A (current default): Formspree

Replace the form `action` in `src/app/contact/page.tsx`:

```html
https://formspree.io/f/your-form-id
```

### Option B: Resend API route

POST to `/api/contact` and set env vars:

```bash
RESEND_API_KEY=your_key
CONTACT_RECEIVER_EMAIL=you@school.com
```

## 6) Add School Assets

Put your logo and photos in `public/images/`, e.g.:

- `public/images/logo.png`
- `public/images/hero-school.jpg`
- `public/images/activities/*`
- `public/images/gallery/*`
- `public/images/og-school.jpg`

## 7) Deploy to Vercel

1. Push code to GitHub.
2. Import repo at Vercel.
3. Add env vars (only if using Resend option).
4. Deploy.

Vercel auto-detects Next.js and builds with `npm run build`.
