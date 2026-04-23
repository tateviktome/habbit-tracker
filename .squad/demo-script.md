# Demo Script (3 Minutes)

## Team: Habbit Hunters
**Challenge:** Option B — Utility App with AI Feature (Habit Tracker)

---

## 1. Problem (0:00 - 0:45) — Spark (Product Owner)

> "People want to build better habits, but existing apps are overwhelming. They require sign-ups, bury the core action under features, and take too long to use daily.
>
> We asked: what if you could open a habit tracker, check off today's habits, and close it in under 10 seconds? No account. No cloud. Just you and your habits.
>
> We scoped to three stories: track daily habits, see your progress through streaks and a weekly view, and get started fast with curated suggestions."

**Show:** The problem statement from Spark's charter.

---

## 2. Solution (0:45 - 2:15) — Forge (Engineer) + Hawkeye (QA)

### Forge demos the core flow:
1. **Open the app** — clean, minimal interface. "Built with React, TypeScript, Vite. Zero cloud dependencies."
2. **Click "Need ideas?"** — show suggestion chips. "AI-curated suggestions help users start without decision paralysis."
3. **Click a suggestion** — habit appears instantly.
4. **Type a custom habit** — "Exercise" — click Add.
5. **Check off both habits** — show green highlight and streak badge. "Immediate visual feedback."
6. **Refresh the page** — "Everything persists in localStorage. No backend needed."
7. **Show the weekly view** — "Mon through Sun, green dots for completed days."

### Hawkeye validates:
8. **Tab through all controls** — "Fully keyboard accessible. Semantic HTML, ARIA labels."
9. **Show the streak badge** — "Streaks are calculated from completion history, not stored separately."
10. "We ran 14 test scenarios covering all three user stories — happy paths, failure paths, and edge cases. All green."

---

## 3. AI Squad Impact (2:15 - 3:00) — Captain + Sentinel + Scribe

### Captain:
> "Six AI agents worked in parallel. Spark defined scope, I broke it into seven tasks sized 5-15 minutes each. Forge built while Hawkeye, Sentinel, and Scribe produced outputs simultaneously.
>
> Three HITL gates — at minutes 10, 30, and 50. Each one documented with decisions and actions. At Gate 3, we ran a gap analysis against the challenge requirements and filled every hole."

### Sentinel:
> "Three risks assessed. XSS mitigated by React's default escaping. localStorage tampering handled with try/catch. Data loss accepted for prototype — documented honestly."

### Scribe:
> "README has run steps, features, and six known limitations — including the ones Sentinel flagged. Any developer can clone this repo and run it in 30 seconds."

### Captain closes:
> "We built a polished core flow, not an ambitious half-finished concept. Every agent produced concrete output. Every output connects to another agent's work. That's the squad model in action."

---

## Backup Talking Points (if judges ask)
- **Why hardcoded AI?** Sensible AI usage means the AI adds value where it matters — during development (code generation, architecture decisions, test design) and in the product (curated suggestions). A gimmicky API call would have added latency and a key dependency for no real user benefit.
- **Why localStorage?** Local-first = fast, private, no account needed. Matches our "under 10 seconds" goal.
- **What would you add next?** Data export/import (Sentinel's top recommendation), dark mode toggle, optional cloud sync.
- **Accessibility?** Semantic HTML, ARIA labels on all controls, keyboard navigable, WCAG AA contrast. Built in from the start, not bolted on.
