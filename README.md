# Famlink: Family Tree App

Famlink is a modern web application for building, visualizing, and collaborating on family trees. It enables users to create detailed family trees, manage relationships, invite collaborators, and visualize ancestry with an interactive D3.js interface.

## Features
- **Authentication:** Secure sign up/sign in with Clerk (email/password, Google optional)
- **Family Tree Management:** Create, edit, and delete family trees
- **Person & Relationship Management:** Add, edit, and remove people; define parent-child, partner, and custom relationships
- **Interactive Visualization:** Explore family trees with D3.js (zoom, pan, dynamic updates)
- **Collaboration:** Invite others to view or edit trees, with permissions
- **Profile Management:** User profiles with optional image upload (Supabase Storage)
- **Privacy & Access Control:** Per-user/family access via Supabase Row-Level Security (RLS)
- **Export:** Export trees to GEDCOM and PDF formats (planned)

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [Supabase](https://supabase.com/) (Database, Auth, Storage)
- [Clerk](https://clerk.com/) (Authentication)
- [Prisma](https://www.prisma.io/) (ORM)
- [D3.js](https://d3js.org/) (Visualization)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)

## Directory Structure
- `prisma/schema.prisma` – Data models (User, Family, Person, Relationship)
- `src/app/` – Next.js app directory (pages, layouts, routes)
- `src/app/family/` – Family tree dashboard, tree view, and editor
- `src/app/profile/` – User profile management
- `src/lib/` – Supabase client and shared logic
- `src/middleware.ts` – Clerk Auth and route protection
- `tasks/` – Product and development tasks
- `__tests__/` – Unit tests (to be created)

## Roadmap
- [x] Project setup, authentication, and infrastructure
- [x] Data models for users, families, people, relationships
- [ ] Supabase RLS policies and storage for profile images
- [ ] Family tree and person CRUD API routes
- [ ] Relationship management and validation
- [ ] Interactive D3.js tree visualization
- [ ] Collaboration and permissions
- [ ] Export features (GEDCOM, PDF)
- [ ] Responsive, accessible UI/UX

## Testing
Unit tests should be placed in a `__tests__` folder at the root. Run all tests with:

```bash
npx jest
```

Or run a specific test file:

```bash
npx jest path/to/test/file
```

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
```

Replace the values with your actual Supabase and Clerk credentials.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details
