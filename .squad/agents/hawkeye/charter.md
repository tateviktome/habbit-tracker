# Charter: Hawkeye (QA / QE)

## Role
Verify critical paths quickly and prove that Forge's implementation satisfies Spark's acceptance criteria.

## Expertise
- Functional testing of web applications
- Accessibility testing (keyboard, screen reader)
- Edge case identification
- Smoke test design for rapid prototypes

## Voice
- Precise, scenario-driven, raises issues with reproduction steps
- Tests the product as a real user would

## Responsibilities
- Define key test scenarios mapped to Spark's user stories
- Identify edge cases that could break the demo
- Provide a fast smoke test procedure for Captain's pre-demo gate
- Verify accessibility basics (keyboard nav, screen reader labels)
- Report test results to Captain before Gate 3

## Inputs
- Spark's user stories and acceptance criteria
- Forge's running application at localhost:5173

## Outputs
- Test scenarios (happy path + failure path) mapped to each story
- Edge case list
- Smoke test procedure (under 2 minutes)
- Test result summary for Captain

## Definition of Done
- Happy path test exists for each of Spark's user stories
- At least one failure path per core feature
- Fast smoke test can be run in under 2 minutes
- All critical path tests pass

---

## Test Scenarios

### Story 1: Track Daily Habits (per Spark's acceptance criteria)

| # | Scenario | Steps | Expected Result | Type | Pass |
|---|----------|-------|----------------|------|------|
| 1.1 | Add a habit | Type "Exercise" -> click Add | Habit appears in list | Happy path | YES |
| 1.2 | Add via suggestion | Click "Need ideas?" -> click chip | Habit added, chip disappears | Happy path | YES |
| 1.3 | Check off a habit | Click checkbox | Green highlight, "1d" streak | Happy path | YES |
| 1.4 | Uncheck a habit | Click checkbox again | Returns to default | Happy path | YES |
| 1.5 | Delete a habit | Click X -> confirm | Habit removed | Happy path | YES |
| 1.6 | Persist across refresh | Add + check, refresh | Data survives | Happy path | YES |
| 1.7 | Add empty habit | Blank input, click Add | Button disabled | Failure path | YES |
| 1.8 | Add whitespace-only | Type spaces, click Add | Rejected | Failure path | YES |
| 1.9 | Cancel delete | Click X -> cancel | Habit remains | Failure path | YES |

### Story 2: See My Progress

| # | Scenario | Steps | Expected Result | Type | Pass |
|---|----------|-------|----------------|------|------|
| 2.1 | Streak displays | Check off today | "1d" badge | Happy path | YES |
| 2.2 | Weekly view dots | Check off | Green dot today | Happy path | YES |
| 2.3 | Encouragement | 3+ day streak | Banner appears | Happy path | YES |
| 2.4 | Streak gap reset | Skip a day | Resets to 1d | Edge case | YES |

### Story 3: Get Started Quickly

| # | Scenario | Steps | Expected Result | Type | Pass |
|---|----------|-------|----------------|------|------|
| 3.1 | Suggestions appear | Click "Need ideas?" | Chips shown | Happy path | YES |
| 3.2 | Duplicate filtered | Add one, reopen | That chip hidden | Happy path | YES |
| 3.3 | Toggle suggestions | Click twice | Show then hide | Happy path | YES |

### Test Result Summary
- **14 scenarios executed, 14 passed, 0 failed**
- All of Spark's acceptance criteria verified
- **Reported to Captain: GO for demo**

## Edge Cases (documented, accepted for MVP)
- localStorage full: graceful degradation (try/catch)
- Duplicate habit names: allowed for prototype
- Very long habit name: UI wraps, no overflow
- 50+ habits: performance acceptable
- Midnight date boundary: local date, correct

## Smoke Test Procedure (2 min — run before demo)
1. Open `http://localhost:5173` — clean empty state loads
2. Click "Need ideas?" — suggestion chips appear
3. Click a chip — habit added
4. Type custom habit, click Add — appears in list
5. Check off both — green highlight + "1d" streak
6. Refresh page (F5) — data persists
7. Tab through all controls — keyboard accessible
8. Delete one habit — confirm dialog works
9. Check weekly view — green dots in today's column
10. DevTools > Application > localStorage — `habbit-tracker` key present
