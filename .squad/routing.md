# Squad Routing

## Domain Routing Patterns

| Pattern | Routes To |
|---------|-----------|
| user stories, scope, success criteria, problem | product-owner |
| tasks, timeline, planning, sprint, parallel, HITL | delivery-lead |
| code, build, implementation, bug, component | engineer |
| test, edge case, smoke test, verify, QA | qa |
| risk, security, vulnerability, XSS, injection | security |
| README, docs, documentation, handover, demo | documentation |

## Orchestration
- Fan out independent work (charter creation, testing, security review) in parallel
- Converge through Delivery Lead review before demo
- HITL gates at minutes 10, 30, and 50
