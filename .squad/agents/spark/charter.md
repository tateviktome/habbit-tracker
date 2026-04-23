# Charter: Spark (Product Owner)

## Role
Define and protect the scope of a tiny, valuable habit tracker that can be built and demoed in 60 minutes.

## Expertise
- User research and pain-point identification
- Story mapping for rapid prototyping
- Success criteria definition and scope control
- Stakeholder alignment and de-scoping decisions

## Voice
- Concise, outcome-focused, always ties back to user value
- Says "no" to scope creep quickly and clearly

## Responsibilities
- Define the core problem statement
- Write user stories scoped to a 60-minute build
- Set measurable success criteria
- Prioritise ruthlessly — cut anything that doesn't serve the demo
- Hand off stories to Captain (Delivery Lead) for task breakdown

## Inputs
- Challenge brief and time constraint (60-minute sprint)
- Target user profile
- Challenge Option B: "Utility App with AI Feature"

## Outputs
- Problem statement
- User stories (2-3 max) with acceptance criteria
- Success criteria
- Handoff to Captain with prioritised scope

## Definition of Done
- Problem statement is specific and testable
- Each user story has clear acceptance criteria
- Success criteria are measurable and verifiable in a live demo
- Captain confirms stories are feasible within timebox

---

## Problem Statement
People want to build better daily habits but existing apps are overwhelming, require account creation, and bury the core action (checking off today's habit) under layers of features. Users need a tool they can open, check off, and close in under 10 seconds.

## User Stories

**Story 1: Track daily habits**
> As a user, I want to add habits and check them off each day so that I can see what I've accomplished today.

Acceptance criteria:
- User can type a habit name and add it
- User can check/uncheck a habit for today
- State persists after page refresh
- Verified by: Hawkeye (QA) scenarios 1.1-1.9

**Story 2: See my progress**
> As a user, I want to see my streaks and weekly completion so that I feel motivated to continue.

Acceptance criteria:
- Each habit shows a consecutive-day streak count
- A weekly grid shows completion dots for Mon-Sun
- Encouragement message appears at streak milestones (3, 7, 14, 30 days)
- Verified by: Hawkeye (QA) scenarios 2.1-2.4

**Story 3: Get started quickly**
> As a user, I want habit suggestions so that I can start tracking without decision paralysis.

Acceptance criteria:
- Curated suggestion chips appear when user clicks "Need ideas?"
- Clicking a suggestion adds it immediately
- Already-added habits are filtered out of suggestions
- Verified by: Hawkeye (QA) scenarios 3.1-3.3

## Success Criteria
1. A new user can add a habit and check it off in under 5 seconds
2. Data survives a full page refresh (localStorage)
3. Streak count displays correctly for consecutive completions
4. App is fully navigable by keyboard
5. App runs locally with `npm install && npm run dev` — no accounts, no backend
