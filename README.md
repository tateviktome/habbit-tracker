# Habit Tracker

A simple, accessible web app for building daily habits. Track your progress with streaks, weekly overviews, and curated suggestions — all in your browser, no account required.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

```bash
npm run build
```

Output is in `dist/` — serve with any static file server.

## Key Features

- **Add habits** — type a name or pick from curated suggestion chips
- **Daily check-off** — checkbox per habit, visual feedback when done
- **Streak tracking** — consecutive day count shown per habit
- **Weekly overview** — Mon-Sun grid with completion dots
- **Encouragement** — milestone messages at 3, 7, 14, and 30 day streaks
- **Persistent** — all data saved to localStorage, survives page refresh
- **Accessible** — semantic HTML, ARIA labels, full keyboard navigation, WCAG AA contrast

## Tech Stack

- React 19 + TypeScript
- Vite 8
- CSS Modules
- localStorage (no backend)

## Project Structure

```
src/
  types.ts                    # Habit, AppState, Action types
  App.tsx                     # Root component with reducer
  hooks/usePersistedReducer.ts  # Reducer + localStorage sync
  utils/habits.ts             # Streak, weekly, date utilities
  utils/suggestions.ts        # Curated suggestions + encouragement
  components/                 # Header, HabitForm, HabitList, HabitItem,
                              # WeeklyView, Encouragement
```

## Known Limitations

- **No cloud sync** — data lives only in this browser's localStorage. Clearing browser data deletes everything.
- **No data export** — no way to back up or migrate habit history yet.
- **No reminders** — the app doesn't send notifications or reminders.
- **Single device** — no account system, so habits don't sync across devices.
- **No undo** — deleting a habit is permanent (confirmation dialog is the only safeguard).
- **AI features are hardcoded** — suggestions and encouragement use curated lists, not a live AI model.

## AI Squad

Built by **Habbit Hunters** — a 6-agent AI squad:

| Agent | Name | Role |
|-------|------|------|
| Product Owner | Spark | Defined scope, stories, success criteria |
| Delivery Lead | Captain | Task breakdown, HITL gates, coordination |
| Engineer | Forge | Built the working application |
| QA / QE | Hawkeye | 14 test scenarios, smoke test procedure |
| Security | Sentinel | Risk assessment, vulnerability review |
| Documentation | Scribe | README, demo script, handover docs |

Charters: `.squad/agents/{name}/charter.md`

## Demo Script (3 min)

| Time | Speaker | What |
|------|---------|------|
| 0:00-0:45 | Spark | Problem statement + scope |
| 0:45-2:15 | Forge + Hawkeye | Live demo + verification |
| 2:15-3:00 | Captain + Sentinel + Scribe | Process, security, reflection |

See `.squad/demo-script.md` for full speaking notes.
