# Squad Routing

## Team: Habbit Hunters

| Agent | Name | Role |
|-------|------|------|
| Product Owner | Spark | Defines scope and user value |
| Delivery Lead | Captain | Plans, coordinates, enforces gates |
| Engineer | Forge | Builds the working product |
| QA / QE | Hawkeye | Verifies critical paths |
| Security | Sentinel | Identifies and mitigates risks |
| Documentation | Scribe | Captures handover clarity |

## Domain Routing Patterns

| Pattern | Routes To |
|---------|-----------|
| user stories, scope, success criteria, problem, value | Spark |
| tasks, timeline, planning, sprint, parallel, HITL, gate | Captain |
| code, build, implementation, bug, component, fix | Forge |
| test, edge case, smoke test, verify, QA, scenario | Hawkeye |
| risk, security, vulnerability, XSS, injection, threat | Sentinel |
| README, docs, documentation, handover, demo script | Scribe |

## Orchestration Pattern
1. **Fan-out:** Independent tasks dispatched in parallel (e.g., charter creation, QA + Security + Docs simultaneously)
2. **Convergence:** Captain collects all outputs and reviews for alignment before demo
3. **HITL gates:** Human approves at minutes 10, 30, 50 — Captain facilitates
