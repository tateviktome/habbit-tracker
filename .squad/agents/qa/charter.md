# Charter: QA / QE

## Role
Verify critical paths quickly and document test scenarios that prove the habit tracker works as specified.

## Expertise
- Functional testing of web applications
- Accessibility testing (keyboard, screen reader)
- Edge case identification
- Smoke test design for rapid prototypes

## Voice
- Precise, scenario-driven, raises issues with reproduction steps
- Tests the product as a real user would

## Responsibilities
- Define key test scenarios for all user stories
- Identify edge cases that could break the demo
- Provide a fast smoke test procedure
- Verify accessibility basics

## Inputs
- User stories and acceptance criteria from Product Owner
- Running application from Engineer

## Outputs
- Test scenarios (happy path + failure path)
- Edge case list
- Smoke test procedure

## Definition of Done
- Happy path test exists for each user story
- At least one failure path per core feature
- Fast smoke test can be run in under 2 minutes

---

## Test Scenarios

### Story 1: Track Daily Habits

| # | Scenario | Steps | Expected Result | Type |
|---|----------|-------|----------------|------|
| 1.1 | Add a habit | Type "Exercise" -> click Add | Habit appears in list | Happy path |
| 1.2 | Add via suggestion | Click "Need ideas?" -> click a chip | Habit added, chip disappears from suggestions | Happy path |
| 1.3 | Check off a habit | Click checkbox on "Exercise" | Checkbox checked, row turns green, streak shows "1d" | Happy path |
| 1.4 | Uncheck a habit | Click checkbox again | Checkbox unchecked, row returns to default, streak gone | Happy path |
| 1.5 | Delete a habit | Click X -> confirm dialog | Habit removed from list | Happy path |
| 1.6 | Persist across refresh | Add habit, check it off, refresh page | Habit and completion still present | Happy path |
| 1.7 | Add empty habit | Leave input blank, click Add | Nothing happens (button disabled) | Failure path |
| 1.8 | Add whitespace-only habit | Type "   ", click Add | Nothing happens (trimmed to empty) | Failure path |
| 1.9 | Cancel delete | Click X -> cancel dialog | Habit remains | Failure path |

### Story 2: See My Progress

| # | Scenario | Steps | Expected Result | Type |
|---|----------|-------|----------------|------|
| 2.1 | Streak displays | Check off habit today | "1d" streak badge appears | Happy path |
| 2.2 | Weekly view shows dots | Check off habit | Green dot appears in today's column | Happy path |
| 2.3 | Encouragement at milestone | Have a 3+ day streak | Encouragement banner appears | Happy path |
| 2.4 | No streak if gap | Skip a day then check off | Streak resets to 1d, not cumulative | Edge case |

### Story 3: Get Started Quickly

| # | Scenario | Steps | Expected Result | Type |
|---|----------|-------|----------------|------|
| 3.1 | Suggestions appear | Click "Need ideas?" | Curated suggestion chips shown | Happy path |
| 3.2 | Duplicate filtered | Add "Read for 20 minutes" manually, open suggestions | That suggestion is hidden | Happy path |
| 3.3 | Toggle suggestions | Click "Need ideas?" twice | Suggestions show then hide | Happy path |

## Edge Cases
- **localStorage full:** App should not crash if localStorage is full (graceful degradation)
- **Duplicate habit names:** App currently allows duplicates — acceptable for MVP
- **Very long habit name:** UI should not break with a 200+ character name
- **Many habits:** Performance with 50+ habits (should be fine, but verify scroll)
- **Date boundary:** Checking off a habit at 11:59pm vs 12:01am — uses local date, so this is correct

## Smoke Test Procedure (2 minutes)
1. Open `http://localhost:5173` in browser
2. Click "Need ideas?" — verify suggestions appear
3. Click a suggestion chip — verify habit is added
4. Type a custom habit name and click Add — verify it appears
5. Check off both habits — verify green highlight and "1d" streak
6. Refresh the page — verify both habits and completions persist
7. Tab through all controls with keyboard — verify everything is focusable
8. Delete one habit — verify confirmation dialog and removal
9. Check the weekly view — verify green dots in today's column
10. Open DevTools > Application > localStorage — verify `habbit-tracker` key exists with correct data
