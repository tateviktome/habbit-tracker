import { useState } from 'react';
import type { AppState, Action } from './types';
import { usePersistedReducer } from './hooks/usePersistedReducer';
import { todayISO } from './utils/habits';
import { Header } from './components/Header';
import { TimeTravelBar } from './components/TimeTravelBar';
import { HabitForm } from './components/HabitForm';
import { Encouragement } from './components/Encouragement';
import { HabitList } from './components/HabitList';
import { Plant } from './components/Plant';
import { WeeklyView } from './components/WeeklyView';
import styles from './App.module.css';

const initialState: AppState = { habits: [] };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_HABIT':
      return {
        ...state,
        habits: [
          ...state.habits,
          {
            id: crypto.randomUUID(),
            name: action.name,
            createdAt: action.today,
            completions: [],
          },
        ],
      };
    case 'DELETE_HABIT':
      return {
        ...state,
        habits: state.habits.filter(h => h.id !== action.id),
      };
    case 'DELETE_ALL':
      return { ...state, habits: [] };
    case 'TOGGLE_TODAY': {
      const date = action.today;
      return {
        ...state,
        habits: state.habits.map(h => {
          if (h.id !== action.id) return h;
          const has = h.completions.includes(date);
          return {
            ...h,
            completions: has
              ? h.completions.filter(d => d !== date)
              : [...new Set([...h.completions, date])],
          };
        }),
      };
    }
    case 'FILL_ALL_TODAY': {
      const date = action.today;
      return {
        ...state,
        habits: state.habits.map(h => ({
          ...h,
          completions: h.completions.includes(date)
            ? h.completions
            : [...h.completions, date],
        })),
      };
    }
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = usePersistedReducer(reducer, initialState, 'habbit-tracker');
  const [currentDate, setCurrentDate] = useState(todayISO());

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <TimeTravelBar
          currentDate={currentDate}
          onChange={setCurrentDate}
          hasHabits={state.habits.length > 0}
          allCompleted={state.habits.length > 0 && state.habits.every(h => h.completions.includes(currentDate))}
          onFillAll={() => dispatch({ type: 'FILL_ALL_TODAY', today: currentDate })}
        />
        <Encouragement habits={state.habits} today={currentDate} />
        <HabitForm
          onAdd={name => dispatch({ type: 'ADD_HABIT', name, today: currentDate })}
          existingNames={state.habits.map(h => h.name)}
        />
        <HabitList
          habits={state.habits}
          today={currentDate}
          onToggle={id => dispatch({ type: 'TOGGLE_TODAY', id, today: currentDate })}
          onDelete={id => dispatch({ type: 'DELETE_HABIT', id })}
          onDeleteAll={() => {
            if (window.confirm('Delete all habits? This cannot be undone.')) {
              dispatch({ type: 'DELETE_ALL' });
            }
          }}
        />
        <Plant habits={state.habits} today={currentDate} />
        <WeeklyView habits={state.habits} today={currentDate} />
      </main>
    </div>
  );
}
