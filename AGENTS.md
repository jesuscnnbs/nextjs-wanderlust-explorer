<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# nextjs-wanderlust-explorer

Fresh `create-next-app` scaffold — no custom code, no tests, no CI.

## Commands

```bash
npm run dev      # dev server (Turbopack by default in v16)
npm run build    # production build (Turbopack by default)
npm run lint     # ESLint flat config
```

## Structure

```
src/        → app/  (App Router, layout.tsx + page.tsx)
@/*         → ./src/*  (tsconfig path alias)
```

## Stack

- **Next.js 16** — `params`/`searchParams` are Promises; `middleware` renamed to `proxy`; `revalidateTag` requires 2nd arg `cacheLife`; `cacheLife`/`cacheTag` stable (no `unstable_`)
- **Tailwind v4** with `@tailwindcss/postcss`
- **ESLint** flat config (`eslint.config.mjs`)


**Product Requirements**

1. **Home Page**
	* Display a hero section with a button that navigates to the `/experiences` page
2. **Experiences Page (/experiences)**
	* Display a list of cards representing experiences, including:
		+ Search bar that filters experiences by title (case-insensitive regex)
		+ At least two filters: category and destination
		+ Reflect search term and active filters in the URL as query parameters
	* Pre-populate input fields with search term and filter values when the page loads
3. **Experience Detail Page (/experiences/[id])**
	* Display full information about an experience, retrieved from the local dataset by its ID
4. **Favourites Page (/favourites)**
	* Display a list of experiences that the user has marked as favourites (stored in component state for now)
5. **Profile Page (/profile)**
	* Display a static page with a simulated user profile and a summary showing the number of saved favourites

**Technical Requirements**

1. **Technology Stack**
	- **Next.js 16** — `params`/`searchParams` are Promises; `middleware` renamed to `proxy`; `revalidateTag` requires 2nd arg `cacheLife`; `cacheLife`/`cacheTag` stable (no `unstable_`)
  - **Tailwind v4** with `@tailwindcss/postcss`
  - **ESLint** flat config (`eslint.config.mjs`)
2. **Component Inventory**
	* Develop reusable components for:
		+ Experience cards
		+ Search bar
		+ Filters (category and destination)
3. **Dataset Generation**
	* Generate an array of 100 experience objects using an AI code assistant, with at least the following properties:
		+ id
		+ title
		+ description
		+ category (one of: Adventure, Culture, Food, Wellness, Nature)
		+ destination (city + country)
		+ price
		+ rating
		+ imageUrl (any placeholder)
	* Save the dataset as a local TypeScript file

**Acceptance Criteria**

1. The search bar filters experiences by title using a case-insensitive regex.
2. The category and destination filters work independently and can be combined with the search.
3. The search term and active filters are reflected in the URL as query parameters.
4. The input fields are pre-populated with search term and filter values when the page loads.
5. The application persists data locally, storing favourites in component state for now.