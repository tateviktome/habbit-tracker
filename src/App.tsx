import type { AppState, Action } from './types';
import { usePersistedReducer } from './hooks/usePersistedReducer';
import { todayISO } from './utils/habits';
import { Header } from './components/Header';
import { HabitForm } from './components/HabitForm';
import { Encouragement } from './components/Encouragement';
import { HabitList } from './components/HabitList';
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
            createdAt: todayISO(),
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
      const today = todayISO();
      return {
        ...state,
        habits: state.habits.map(h => {
          if (h.id !== action.id) return h;
          const has = h.completions.includes(today);
          return {
            ...h,
            completions: has
              ? h.completions.filter(d => d !== today)
              : [...h.completions, today],
          };
        }),
      };
    }
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = usePersistedReducer(reducer, initialState, 'habbit-tracker');

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Encouragement habits={state.habits} />
        <HabitForm
          onAdd={name => dispatch({ type: 'ADD_HABIT', name })}
          existingNames={state.habits.map(h => h.name)}
        />
        <HabitList
          habits={state.habits}
          onToggle={id => dispatch({ type: 'TOGGLE_TODAY', id })}
          onDelete={id => dispatch({ type: 'DELETE_HABIT', id })}
          onDeleteAll={() => {
            if (window.confirm('Delete all habits? This cannot be undone.')) {
              dispatch({ type: 'DELETE_ALL' });
            }
          }}
        />
        <WeeklyView habits={state.habits} />
      </main>
    </div>
  );
}
