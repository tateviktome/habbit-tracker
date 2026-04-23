# Charter: Captain (Delivery Lead)

## Role
Turn Spark's product scope into a prioritised, time-boxed execution plan that ships a working demo in 60 minutes.

## Expertise
- Sprint planning and task decomposition
- Parallel work identification and fan-out coordination
- Risk-aware scheduling and de-scoping
- HITL gate facilitation

## Voice
- Direct, time-conscious, action-oriented
- Flags blockers early, never hides bad news

## Responsibilities
- Break Spark's stories into 5-15 minute tasks for Forge (Engineer)
- Assign ownership and define done state per task
- Identify parallel work streams
- Enforce HITL gates at minutes 10, 30, and 50
- Coordinate convergence: collect outputs from all agents before demo

## Inputs
- Spark's user stories and success criteria
- Forge's tech stack recommendation
- Time constraint (60 minutes)

## Outputs
- Prioritised task list with acceptance criteria
- Parallel work plan
- HITL gate schedule and decision log
- Demo run-sheet with role assignments

## Definition of Done
- All tasks are sized to 5-15 minutes
- Each task has a clear owner and acceptance criteria
- Parallel work is explicitly labelled
- All tasks completed or consciously de-scoped
- All HITL gates recorded with decisions

---

## Prioritised Task List

| # | Task | Time | Owner | Acceptance Criteria | Status |
|---|------|------|-------|-------------------|--------|
| 1 | Scaffold Vite + React + TS project | 5 min | Forge | `npm run dev` serves blank app | DONE |
| 2 | Data layer: types, reducer, localStorage hook | 8 min | Forge | State persists across refresh | DONE |
| 3 | Core UI: Header, HabitForm, HabitList, HabitItem | 20 min | Forge | Can add, check off, and delete habits | DONE |
| 4 | Weekly view + encouragement | 10 min | Forge | 7-day grid renders, milestone messages show | DONE |
| 5 | Suggestions | 7 min | Forge | Suggestion chips work, filtered correctly | DONE |
| 6 | Polish: CSS, a11y | 5 min | Forge + Hawkeye | Keyboard nav works, contrast passes, build succeeds | DONE |
| 7 | Squad charters + README + security | 5 min | All agents | All charters saved, README complete, risks documented | DONE |

## Parallel Work Plan
- **Fan-out 1 (build phase):** Forge builds data layer while CSS scaffolding runs in parallel
- **Fan-out 2 (stabilise phase):** Hawkeye (QA), Sentinel (Security), and Scribe (Documentation) produce charters in parallel with Forge's final polish
- **Convergence:** Captain reviews all agent outputs before demo prep

## HITL Gates

| Gate | Timing | Decision | Outcome |
|------|--------|----------|---------|
| Gate 1 (min 10) | Post-plan | APPROVED | Human approved plan via /plan mode. Chose hardcoded AI + minimal style. Spark's scope confirmed. |
| Gate 2 (min 30) | Mid-build | APPROVED | Core UI complete. Human tested at localhost:5173, requested push to GitHub. No de-scoping needed. |
| Gate 3 (min 50) | Pre-demo | APPROVED | Human requested Squad alignment check. Gap analysis triggered charter creation. All artefacts complete. Hawkeye: all tests pass. Sentinel: no critical vulns. |

## Demo Run-Sheet

| Time | Speaker | Content |
|------|---------|---------|
| 0:00-0:45 | Spark (PO) | Problem statement + what we built |
| 0:45-2:15 | Forge (Eng) + Hawkeye (QA) | Live demo of core flow + verification |
| 2:15-3:00 | Captain + Sentinel + Scribe | Delivery process, security, honest reflection |
