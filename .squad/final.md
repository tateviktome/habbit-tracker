# Habios — Final Delivery Document

**Team:** Habbit Hunters | **Challenge:** Option B — Utility App with AI Feature | **Stack:** React + TypeScript + Vite

---

## 1. Product (Spark — Product Owner)

### Problem Statement
People want to build better daily habits but existing apps are overwhelming, require account creation, and bury the core action (checking off today's habit) under layers of features. Users need a tool they can open, check off, and close in under 10 seconds.

### User Stories

**Story 1: Track daily habits**
> As a user, I want to add habits and check them off each day so that I can see what I've accomplished today.

- User can type a habit name and add it
- User can check/uncheck a habit for today
- State persists after page refresh

**Story 2: See my progress**
> As a user, I want to see my streaks and weekly completion so that I feel motivated to continue.

- Each habit shows a consecutive-day streak count
- A weekly grid shows completion dots for Mon-Sun
- Encouragement message appears at streak milestones (3, 7, 14, 30 days)

**Story 3: Get started quickly**
> As a user, I want habit suggestions so that I can start tracking without decision paralysis.

- Curated suggestion chips appear automatically
- Clicking a suggestion adds it immediately
- "Generate a habit best for me" picks from uncovered categories

### Success Criteria
1. A new user can add a habit and check it off in under 5 seconds
2. Data survives a full page refresh (localStorage)
3. Streak count displays correctly for consecutive completions
4. App is fully navigable by keyboard
5. App runs locally with `npm install && npm run dev`

---

## 2. Delivery Plan (Captain — Delivery Lead)

### Task List

| # | Task | Time | Owner | Status |
|---|------|------|-------|--------|
| 1 | Scaffold Vite + React + TS | 5 min | Forge | DONE |
| 2 | Data layer: types, reducer, localStorage | 8 min | Forge | DONE |
| 3 | Core UI: Header, HabitForm, HabitList, HabitItem | 20 min | Forge | DONE |
| 4 | Weekly view + encouragement | 10 min | Forge | DONE |
| 5 | Suggestions + plant game | 7 min | Forge | DONE |
| 6 | Polish: CSS, a11y, validation | 5 min | Forge + Hawkeye | DONE |
| 7 | Squad charters + README + security | 5 min | All agents | DONE |

### Parallel Work
- **Fan-out 1:** Forge builds data layer while CSS scaffolding runs in parallel
- **Fan-out 2:** Hawkeye, Sentinel, and Scribe produce outputs in parallel with Forge's polish
- **Convergence:** Captain reviews all outputs before demo

### Demo Run-Sheet (3 minutes)

| Time | Speaker | Content |
|------|---------|---------|
| 0:00-0:45 | Spark (PO) | Problem + what we built |
| 0:45-2:15 | Forge + Hawkeye | Live demo + verification |
| 2:15-3:00 | Captain + Sentinel + Scribe | Process, security, reflection |

---

## 3. Implementation (Forge — Engineer)

**Tech stack:** Vite 8 + React 19 + TypeScript, CSS Modules, localStorage

**Architecture:**
- `useReducer` with actions: ADD_HABIT, DELETE_HABIT, TOGGLE_TODAY, FILL_ALL_TODAY, DELETE_ALL
- Custom `usePersistedReducer` hook — reducer + localStorage sync
- Completions stored as ISO date strings — streaks and weekly views are derived
- 8 components: Header, HabitForm, HabitList, HabitItem, WeeklyView, Encouragement, Plant, TimeTravelBar

**Key trade-offs:**
- No routing library — single-screen app
- No state management library — useReducer sufficient
- CSS Modules over Tailwind — zero config, scoped by default
- Hardcoded suggestions over live AI API — sensible AI usage

**AI feature rationale:** Curated suggestions and rule-based encouragement deliver clear user value. AI assisted during development (code generation, architecture, test design). Designed for progressive enhancement — a live AI model can be swapped in later.

**Run commands:**
```bash
npm install
npm run dev     # localhost:5173
npm run build   # production build to dist/
```

---

## 4. Test Results (Hawkeye — QA)

### Test Scenarios — 14/14 PASS

| # | Scenario | Type | Pass |
|---|----------|------|------|
| 1.1 | Add a habit | Happy path | YES |
| 1.2 | Add via suggestion | Happy path | YES |
| 1.3 | Check off a habit | Happy path | YES |
| 1.4 | Uncheck a habit | Happy path | YES |
| 1.5 | Delete a habit | Happy path | YES |
| 1.6 | Persist across refresh | Happy path | YES |
| 1.7 | Add empty habit | Failure path | YES |
| 1.8 | Add whitespace-only | Failure path | YES |
| 1.9 | Cancel delete | Failure path | YES |
| 2.1 | Streak displays | Happy path | YES |
| 2.2 | Weekly view dots | Happy path | YES |
| 2.3 | Encouragement at milestone | Happy path | YES |
| 2.4 | Streak gap reset | Edge case | YES |
| 3.1 | Suggestions appear | Happy path | YES |

### Smoke Test (2 min — run before demo)
1. Open localhost:5173 — clean state loads
2. Click suggestion card — habit added
3. Type custom habit, click Add
4. Check off both — green highlight + streak
5. Refresh page — data persists
6. Tab through controls — keyboard accessible
7. Delete one habit — confirm dialog works
8. Weekly view — green dots in today's column

**Result: GO for demo.**

---

## 5. Security (Sentinel — Security)

### Top 3 Risks

| # | Risk | Severity | Mitigation |
|---|------|----------|------------|
| 1 | localStorage data tampering | Low | `try/catch` on reads. No sensitive data stored. |
| 2 | XSS via habit names | Low | React JSX auto-escapes. Zero `dangerouslySetInnerHTML`. Input validated (3-60 chars, must contain a letter). |
| 3 | No data backup/export | Medium | Accepted for prototype. Documented in Known Limitations. |

### Accepted Risks
- No authentication — no backend, no shared data
- No HTTPS — localhost only; enforce in production
- No CSP headers — acceptable for prototype

**Verdict: CLEARED for demo. No critical vulnerabilities.**

---

## 6. Documentation (Scribe)

### How to Run
```bash
npm install
npm run dev
```
Open http://localhost:5173

### Key Features
- Add habits by typing or picking from smart suggestions
- Daily check-off with visual feedback
- Streak tracking with consecutive day count
- Growing plant game (6 stages: 🪴→🌰→🌱→🌿→🌻→🌳)
- Weekly overview grid
- Time-travel to simulate days and demo plant growth
- Accessible: semantic HTML, ARIA labels, keyboard nav

### Known Limitations
- No cloud sync — localStorage only
- No data export — no backup option yet
- No reminders or notifications
- Single device — no account system
- No undo — delete is permanent
- AI features are hardcoded curated lists

---

## 7. HITL Gate Records

### Gate 1 (Minute 10) — APPROVED
- Human reviewed plan via `/plan` mode
- Chose hardcoded AI suggestions over live API
- Chose clean minimal light theme
- Scope confirmed, Forge authorised to build

### Gate 2 (Minute 30) — APPROVED
- Core UI complete, human tested at localhost:5173
- All stories implemented, no de-scoping needed
- Pushed to GitHub

### Gate 3 (Minute 50) — APPROVED
- Gap analysis against Squad requirements PDF
- All 6 charters created in parallel
- Hawkeye: 14/14 tests pass
- Sentinel: no critical vulnerabilities
- Scribe: README + demo script complete
- **READY FOR DEMO**

---

## Final Pre-Demo Checklist

- [x] Every agent produced at least one concrete output
- [x] Outputs are aligned and non-contradictory
- [x] One core user flow works from start to finish
- [x] Risks and limitations are explicitly stated
- [x] Charters saved under `.squad/agents/{member}/charter.md`
- [x] HITL approvals recorded at each gate with actions taken
