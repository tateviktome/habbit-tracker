# Charter: Security

## Role
Identify and mitigate the top security risks in the habit tracker prototype, keeping recommendations practical and feasible within the sprint.

## Expertise
- OWASP Top 10 awareness
- Client-side security (XSS, injection, storage)
- Privacy and data protection basics
- Threat modelling for prototypes

## Voice
- Risk-first, pragmatic, never alarmist
- Recommends mitigations that can be applied now, not "someday"

## Responsibilities
- Assess the application's attack surface
- Identify the top 3 risks by impact
- Recommend practical mitigations for each
- Flag any risks that must be accepted for the prototype

## Inputs
- Application source code and architecture from Engineer
- Tech stack and data model

## Outputs
- Top 3 risks with severity and mitigations
- Accepted risks statement for prototype scope

## Definition of Done
- Risks are prioritised by impact
- Every mitigation is feasible within the current sprint or clearly marked as post-MVP
- No theoretical-only recommendations

---

## Security Assessment

### Architecture Context
- Client-side only React app (no backend, no API calls)
- Data stored in browser localStorage
- No authentication, no user accounts
- No network requests beyond serving static assets
- No AI API calls (hardcoded suggestions only)

### Top 3 Risks

#### Risk 1: localStorage Data Tampering (Low severity)
**Description:** Any JavaScript running on the same origin can read/write localStorage. A browser extension or XSS on a co-hosted site could modify or delete habit data.

**Impact:** Data loss or corruption of habit history. No sensitive data exposed (no passwords, no PII beyond habit names).

**Mitigation (applied):**
- The app uses `try/catch` around localStorage reads — corrupted JSON won't crash the app
- No sensitive data is stored (habit names are the only user input)

**Mitigation (post-MVP):**
- Add data validation on load (check array structure, date formats)
- Consider IndexedDB with schema validation for future versions

#### Risk 2: Cross-Site Scripting via Habit Names (Low severity)
**Description:** User-entered habit names are rendered in the UI. If React's JSX escaping were bypassed, this could enable XSS.

**Impact:** Prototype is self-contained (no auth tokens to steal), but XSS is still bad practice.

**Mitigation (applied):**
- React's JSX automatically escapes all string content rendered via `{variable}` — habit names are never rendered with `dangerouslySetInnerHTML`
- No user input is used in `href`, `src`, or other injection-prone attributes
- Input is trimmed before storage

**Status:** Mitigated by framework defaults. No action needed.

#### Risk 3: No Data Backup or Export (Medium severity for user value)
**Description:** All data lives in a single browser's localStorage. Clearing browser data, switching browsers, or using incognito mode results in complete data loss.

**Impact:** Users could lose weeks of habit tracking data with no recovery option.

**Mitigation (post-MVP):**
- Add a JSON export/import feature
- Consider optional cloud sync in future iterations

**Status:** Accepted risk for prototype. Users are not yet storing long-term critical data.

### Accepted Risks (Prototype Scope)
- No authentication — acceptable because there's no backend and no shared data
- No HTTPS enforcement — acceptable for localhost dev; production deployment should enforce HTTPS
- No Content Security Policy headers — acceptable for prototype; add CSP when deploying to production
- No rate limiting on habit creation — acceptable because all data is local

### Verdict
The app has a minimal attack surface. All user input is handled safely by React's default escaping. The main real-world risk is data loss from localStorage clearing, which should be addressed with export/import in a future iteration.
