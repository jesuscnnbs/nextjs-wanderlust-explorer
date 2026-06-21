<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# nextjs-wanderlust-explorer

Fresh `create-next-app` scaffold. Treat this repo as an initial baseline.

## Source of Truth

- Commands and runtime behavior: `package.json`
- AI agent instructions: `AGENTS.md`
- `README.md` may lag behind implementation details

## Commands

- `npm run dev` starts local development server
- `npm run lint` runs ESLint flat config checks
- `npm run build` validates production build
- `npm run start` runs production server
- There are no automated tests yet

## Current Repository State

- Existing app routes: only `/` (`src/app/page.tsx`)
- Existing app files in App Router: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- Do not assume domain components, data layer, or extra routes already exist

## Target Product Requirements (Not Yet Implemented)

- Build the following routes when requested:
1. `/` home hero with CTA to `/experiences`
2. `/experiences` list with search + category + destination filters
3. `/experiences/[id]` experience detail by local dataset id
4. `/favourites` list from local component state
5. `/profile` static profile with saved favourites summary

## Technical Constraints

- Stack:
  - Next.js 16
  - Tailwind v4 with `@tailwindcss/postcss`
  - ESLint flat config (`eslint.config.mjs`)
- Reusable components expected when implementing product features:
  - Experience card
  - Search bar
  - Filters (category and destination)
- Dataset requirement:
  - Local TypeScript dataset with 100 experiences
  - Required fields: `id`, `title`, `description`, `category`, `destination`, `price`, `rating`, `imageUrl`
  - Allowed categories: `Adventure`, `Culture`, `Food`, `Wellness`, `Nature`

## Next.js 16 Guardrails

- `params` and `searchParams` are Promises in route handlers/pages where applicable
- `middleware` has been renamed to `proxy`
- `revalidateTag` requires second argument `cacheLife`
- Use stable `cacheLife` and `cacheTag` APIs (not `unstable_*`)
- Before using any API pattern you are unsure about, check docs in `node_modules/next/dist/docs/`

## Implementation Rules for Agents

- Reflect search term and active filters in URL query parameters
- Pre-populate UI inputs from current query parameters
- Search must use case-insensitive regex against experience title
- Category and destination filters must be independent and composable
- Keep favourites local in component state for now
- Prefer creating missing architecture explicitly instead of assuming files already exist

## Validation Checklist

Run before finalizing feature work:
1. `npm run lint`
2. `npm run build`
3. Manual spot check in `npm run dev` for affected routes