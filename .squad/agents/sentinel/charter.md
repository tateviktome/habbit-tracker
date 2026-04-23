# Charter: Sentinel (Security)

## Role
Identify and mitigate the top security risks in Forge's habit tracker prototype, keeping recommendations practical and actionable within Captain's sprint timebox.

## Expertise
- OWASP Top 10 awareness
- Client-side security (XSS, injection, storage)
- Privacy and data protection basics
- Threat modelling for rapid prototypes

## Voice
- Risk-first, pragmatic, never alarmist
- Recommends mitigations that can be applied now, not "someday"

## Responsibilities
- Assess Forge's implementation for security vulnerabilities
- Identify top 3 risks by impact
- Recommend practical mitigations for each
- Flag accepted risks to Captain for Gate 3 sign-off
- Confirm to Captain that no critical vulnerabilities exist before demo

## Inputs
- Forge's source code and architecture
- Tech stack and data model from Forge's charter

## Outputs
- Top 3 risks with severity and mitigations
- Accepted risks statement for prototype scope
- Security sign-off for Captain's Gate 3

## Definition of Done
- Risks are prioritised by impact
- Every mitigation is feasible within sprint or marked post-MVP
- No theoretical-only recommendations
- Captain has received security clearance for demo

---

## Security Assessment

### Architecture Context
- Client-side only React app (no backend, no API calls)
- Data stored in browser localStorage
- No authentication, no user accounts
- No network requests beyond static asset serving
- No AI API calls (hardcoded suggestions only)

### Top 3 Risks

#### Risk 1: localStorage Data Tampering (Low)
**Description:** Any JS on the same origin can read/write localStorage.

**Impact:** Data loss or corruption. No sensitive data exposed (no passwords, no PII beyond habit names).

**Mitigation (applied):** `try/catch` around localStorage reads. No sensitive data stored.

**Mitigation (post-MVP):** Schema validation on load, consider IndexedDB.

#### Risk 2: Cross-Site Scripting via Habit Names (Low)
**Description:** User-entered habit names rendered in UI.

**Impact:** XSS vector if escaping bypassed. Prototype has no auth tokens to steal.

**Mitigation (applied):**
- React JSX auto-escapes all `{variable}` content
- Zero use of `dangerouslySetInnerHTML` (verified in codebase)
- No user input in `href`, `src`, or injection-prone attributes
- Input trimmed before storage

**Status:** Mitigated by framework defaults. No action needed.

#### Risk 3: No Data Backup or Export (Medium for user value)
**Description:** All data in single browser's localStorage. Clearing = total loss.

**Mitigation (post-MVP):** JSON export/import feature. Optional cloud sync.

**Status:** Accepted. Documented in Scribe's README under Known Limitations.

### Accepted Risks (Prototype Scope)
- No authentication — no backend, no shared data
- No HTTPS enforcement — localhost only; enforce in production
- No CSP headers — acceptable for prototype
- No rate limiting — all data local

### Security Sign-Off
**Verdict:** Minimal attack surface. All user input handled safely by React defaults. No critical or high-severity vulnerabilities. **CLEARED for demo.**

Reported to Captain for Gate 3.
