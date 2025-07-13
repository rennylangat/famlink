# Product Requirements Document (PRD): Family Tree Application (MVP)

## 1. Introduction/Overview

The Family Tree Application is a web-based platform designed to help users create, manage, and visualize their family's ancestry and relationships. The app aims to be intuitive and accessible, addressing the lack of user-friendly family tree tools, especially for African families. It supports personal, commercial SaaS, open-source, and family project use cases. Users can build dynamic family trees, invite relatives to collaborate, and preserve their family history for future generations.

## 2. Goals

- Enable users to create and visualize their family tree interactively.
- Allow adding, editing, and deleting people and their relationships (including non-traditional structures).
- Implement user authentication and data access control.
- Support inviting collaborators to edit/view trees.
- Allow exporting family trees in GEDCOM and PDF formats.
- Store user and family data securely in a structured format.
- Ensure the app is mobile-friendly and accessible.

## 3. User Stories

1. As a user, I should be able to add myself to the family tree so I can start building my ancestry.
2. As a user, I should be able to create relationships in the family tree to accurately represent my family structure.
3. As a user, I want to invite collaborators to my family tree so we can build it together.
4. As a user, I want to export my family tree in GEDCOM or PDF format for sharing or backup.

## 4. Functional Requirements

1. The system must allow users to sign up/sign in via email and password using Clerk Auth, with optional Google login.
2. The system must store user profiles with display name and profile photo.
3. The system must allow users to create, view, edit, and delete family trees.
4. The system must allow users to add, edit, and delete people in a family tree, including details such as full name, gender, birth/death date, profile image, and bio.
5. The system must support parent-child and partner/spouse relationships, including non-traditional structures (e.g., adoption, step-parents).
6. The system must render an interactive, zoomable, and pannable family tree visualization using D3.js.
7. The system must allow only the creator and invited collaborators to edit a tree, with Supabase RLS enforcing access control.
8. The system must allow users to invite collaborators to edit/view trees.
9. The system must allow users to export or print their family tree in GEDCOM and PDF formats.
10. The system must prevent duplicate people within a tree.
11. The system must allow users to make their trees public or private, with private as the default.
12. The system must allow the owner to delete a family tree and all associated data.


## 5. Non-Goals (Out of Scope)

- Advanced analytics or reporting features.
- DNA or genetic data integration.
- In-app messaging or chat between users.
- Payment processing or monetization features in MVP.

## 6. Design Considerations

- Minimal onboarding friction via Clerk Auth.
- Clear navigation between trees, profiles, and editing views.
- Visual hierarchy to distinguish generations and family branches.
- Mobile-first responsive design.
- Tailwind CSS for consistent theming and utility-first design.
- Reusable UI components (cards, forms, modals).
- D3.js for interactive tree visualization.
- Reference: [Family Chart Example](https://donatso.github.io/family-chart-doc/wiki-tree?wiki_id=Q43274)

### Page Layouts
- **Landing Page (`/`)**: Hero section, app intro, CTA for Sign Up/Sign In, minimal design.
- **Dashboard (`/family`)**: Lists all family trees, option to create new, responsive grid.
- **Tree View (`/family/[familyId]`)**: D3-rendered tree, sidebar/modal for person details, zoom/pan, edit mode button.
- **Tree Edit (`/family/[familyId]/edit`)**: Form-based editor, parent-child links, real-time feedback.
- **Profile Page (`/profile`)**: View/edit profile, see trees user is part of.

## 7. Technical Considerations

- Supabase as backend (PostgreSQL, Storage).
- Supabase RLS for per-user/family access control.
- Supabase Storage for file uploads (profile photos).
- Clerk Auth for authentication.
- Use Supabase RPCs for tree traversal logic if needed.
- Vercel or Supabase Edge Functions for hosting.
- Zustand for state management (optional).
- Ensure all file storage access is restricted to authenticated users.

## 8. Success Metrics

- Number of users registered.
- Number of family trees created.
- Positive user feedback on ease of use and intuitiveness.
- Successful exports in GEDCOM/PDF formats.

## 9. Open Questions

- Are there any specific legal/privacy requirements for storing family data (e.g., GDPR)?
- Should there be a limit to the number of collaborators per tree in the MVP?
- What is the expected scale for launch (users, trees)?
- Should there be support for importing existing GEDCOM files?
