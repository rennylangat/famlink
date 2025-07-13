## Relevant Files

- `prisma/schema.prisma` - Data models for users, family trees, people, and relationships.
- `src/app/page.tsx` - Landing page (hero, intro, CTA for sign up/in).
- `src/app/layout.tsx` - App layout and navigation.
- `src/app/family/page.tsx` - Dashboard listing all family trees for the user.
- `src/app/family/[familyId]/page.tsx` - Visual tree view (D3.js visualization).
- `src/app/family/[familyId]/edit/page.tsx` - Form-based editor for adding/editing people and relationships.
- `src/app/profile/page.tsx` - User profile management.
- `src/middleware.ts` - Clerk Auth and route protection.
- `src/app/globals.css` - Global styles (Tailwind CSS).
- `package.json` - Project dependencies and scripts.
- `README.md` - Project setup and documentation.

### Notes

- Unit tests should be placed in a __tests__ folder at the root of the project.
- Use `npx jest [optional/path/to/test/file]` to run tests. Running without a path executes all tests found by the Jest configuration.
- You may need to create additional directories such as `src/components/`, `src/lib/`, or `src/hooks/` for reusable logic and UI.

## Tasks

- [x] 1.0 Set up project infrastructure and authentication
  - [x] 1.1 Configure Clerk Auth for sign up/sign in (email/password, Google optional)
  - [x] 1.2 Set up Supabase project and connect to Next.js app
  - [x] 1.3 Configure environment variables for Supabase and Clerk
  - [x] 1.4 Set up Tailwind CSS and global styles
  - [x] 1.5 Add middleware for route protection using Clerk

- [ ] 2.0 Implement user profile and family tree data models (Supabase)
  - [x] 2.1 Define and migrate Prisma schema for User, Family, Person, Relationship
  - [ ] 2.2 Implement Supabase Row-Level Security (RLS) policies for access control
  - [ ] 2.3 Set up Supabase Storage for profile images
  - [ ] 2.4 Seed initial data for development/testing

- [ ] 3.0 Build family tree CRUD and relationship management features
  - [ ] 3.1 Create API routes for family tree CRUD (create, read, update, delete)
  - [ ] 3.2 Create API routes for person CRUD (add, edit, delete people)
  - [ ] 3.3 Implement relationship creation (parent-child, partner/spouse, non-traditional)
  - [ ] 3.4 Prevent duplicate people in a tree (validation)
  - [ ] 3.5 Implement tree privacy (public/private) and deletion by owner
  - [ ] 3.6 Add collaborator invitation and permissions logic

- [ ] 4.0 Develop interactive family tree visualization (D3.js)
  - [ ] 4.1 Integrate D3.js for rendering the family tree structure
  - [ ] 4.2 Implement zoom and pan controls
  - [ ] 4.3 Display person details in sidebar/modal on click
  - [ ] 4.4 Update visualization dynamically as data changes
  - [ ] 4.5 Export tree to GEDCOM and PDF formats

- [ ] 5.0 Implement collaboration, export, and access control features
  - [ ] 5.1 Enable inviting collaborators to edit/view trees
  - [ ] 5.2 Enforce Supabase RLS for per-user/family access
  - [ ] 5.3 Restrict file storage access to authenticated users
  - [ ] 5.4 Handle edge cases (conflicting edits, error feedback)

- [ ] 6.0 Design and build responsive UI/UX
  - [ ] 6.1 Build landing page with hero, intro, and CTA
  - [ ] 6.2 Build dashboard for listing/creating family trees
  - [ ] 6.3 Build tree view and edit pages (D3.js, forms, modals)
  - [ ] 6.4 Build user profile management page
  - [ ] 6.5 Ensure mobile-first responsiveness and accessibility
  - [ ] 6.6 Apply consistent theming with Tailwind CSS
