# Snapread

Turn any PDF into a swipeable deck of AI-generated visual summary cards — skim a 40-page report in the time it takes to drink a coffee.

## Features

- **PDF upload** with drag-and-drop, file validation (type/size), and upload progress feedback
- **AI-powered summarization** — extracts text from the PDF and generates a structured, card-based summary (title, key points, emojis) using Google Gemini
- **Swipeable summary viewer** — paginated cards with a progress bar, keyboard/click navigation, and smooth slide transitions
- **Dashboard** listing all of a user's summaries, with plan-based upload limits
- **Authentication** via Clerk (sign up / sign in / user profile)
- **Tiered pricing** — Basic, Pro, and Business plans with Stripe-based checkout
- **Download summaries** as plain text
- **Fully responsive** — custom-built mobile and desktop layouts (not just scaled-down desktop views), tested down to 320px
- **Custom design system** — a cohesive "reading desk" visual identity (paper/ink/marigold palette, serif display type, monospace metadata labels) applied consistently across the app, built from scratch rather than a generic template

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Auth | [Clerk](https://clerk.com/) |
| AI | Groq API (`groq-sdk`) |
| PDF parsing | [unpdf](https://github.com/unjs/unpdf) |
| File uploads | [UploadThing](https://uploadthing.com/) |
| Payments | Stripe |
| Animation | [Motion](https://motion.dev/) (Framer Motion) |
| Validation | Zod |
| UI primitives | shadcn/ui, Radix, Lucide icons |

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/zahidhasanzh/snapread.git
cd snapread
npm install
```

### 2. Set up environment variables

Copy the example file and fill in your own keys:

```bash
cp .env.example .env.local
```

`.env.local` is git-ignored — your real keys stay local and are never pushed. Here's what each variable is for:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Groq
GROQ_API_KEY=

# UploadThing
UPLOADTHING_TOKEN=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID=
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=
NEXT_PUBLIC_STRIPE_BUSINESS_PRICE_ID=

# Database
DATABASE_URL=
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                    # Routes (App Router)
  (logged-in)/          # Auth-gated pages: dashboard, upload, summaries/[id]
  sign-in/, sign-up/    # Clerk auth pages
components/
  common/                # Header, footer, mobile nav, shared UI
  home/                  # Landing page sections
  upload/                # Upload form + drop zone
  summaries/              # Summary viewer, cards, navigation
  ui/                    # shadcn/ui primitives
lib/                     # Server-side helpers (DB, AI, PDF extraction)
utils/                   # Shared utilities, constants, validation schemas
```

## Deployment

Deployed on [Vercel](https://vercel.com/). When deploying:

1. Push this repo to GitHub
2. Import it in Vercel
3. Add all environment variables listed above under Project Settings → Environment Variables
4. In the Clerk dashboard, add the production domain under **Configure → Domains**

## License

This project is for personal/portfolio use.
