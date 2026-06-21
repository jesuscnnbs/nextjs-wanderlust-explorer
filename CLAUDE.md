# Agent Routing

Primary instructions live in `AGENTS.md`.

## Priority Order

1. `AGENTS.md`
2. `package.json` scripts
3. `README.md` (useful context, but may be stale)

## Operating Rules

- Verify real commands from `package.json` before running tasks
- Run `npm run lint` and `npm run build` before considering work complete
- Do not assume non-existing routes or components are already implemented
- For Next.js 16 API behavior, check `node_modules/next/dist/docs/` before coding
