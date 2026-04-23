# AI Usage Evidence

## Tools Used
- **Claude Code (Claude Opus 4.6)** — primary AI agent orchestrator
- **Squad MCP Server** (`mcp.meetsquad.ai`) — integrated via `claude mcp add squad`
- **GitHub** — version control, commit history shows AI-assisted development

## Agent Collaboration Evidence

### How agents collaborated (not just siloed):
1. **Spark -> Captain:** Spark's user stories were input to Captain's task breakdown. Captain confirmed feasibility.
2. **Captain -> Forge:** Captain's prioritised task list with time budgets drove Forge's implementation order.
3. **Forge -> Hawkeye:** Forge handed off working app; Hawkeye's 14 test scenarios directly verify Spark's acceptance criteria.
4. **Forge -> Sentinel:** Sentinel reviewed Forge's source code for vulnerabilities, confirmed React's XSS protections.
5. **Sentinel -> Scribe:** Sentinel's accepted risks were incorporated into Scribe's README Known Limitations section.
6. **Hawkeye + Sentinel -> Captain:** Both reported results to Captain for Gate 3 decision.
7. **Scribe -> Captain:** Scribe provided demo script for Captain's run-sheet.

### Fan-out patterns used:
- **Build phase:** Forge built data layer and components while CSS work ran in parallel
- **Stabilise phase:** Hawkeye, Sentinel, and Scribe produced outputs in parallel
- **Charter creation:** All 6 agents drafted charters simultaneously

## Commit History
```
0c3d6a5 first commit
680bcbb Add habit tracker MVP with React + TypeScript
ded9784 Add Squad charters, security review, QA test cases, and README
[next]  Upgrade to creative agent names, add AI evidence, demo script
```

## Key AI-Assisted Decisions
1. **Tech stack selection:** AI recommended Vite + React + TS + CSS Modules for fastest path to working prototype
2. **Data model design:** AI designed completions-as-date-strings model — enables derived streaks and weekly views without schema migration
3. **Accessibility:** AI built in semantic HTML, ARIA labels, and keyboard nav from the start
4. **Scope control:** AI recommended hardcoded suggestions over live API — faster, no dependencies, still demonstrates "sensible AI usage"
5. **Security assessment:** AI identified top 3 risks and confirmed mitigations are in place
