import type { Habit } from '../types';
import { isCompletedToday, getStreak } from '../utils/habits';
import styles from './HabitItem.module.css';

interface Props {
  habit: Habit;
  today: string;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function HabitItem({ habit, today, onToggle, onDelete }: Props) {
  const completed = isCompletedToday(habit, today);
  const streak = getStreak(habit, today);

  function handleDelete() {
    if (window.confirm(`Delete "${habit.name}"? This cannot be undone.`)) {
      onDelete(habit.id);
    }
  }

  return (
    <li className={`${styles.item} ${completed ? styles.completed : ''}`}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(habit.id)}
          className={styles.checkbox}
          aria-label={`Mark ${habit.name} as ${completed ? 'incomplete' : 'complete'} for today`}
        />
        <span className={styles.name}>{habit.name}</span>
      </label>

      <div className={styles.right}>
        {streak > 0 && (
          <span className={styles.streak} title={`${streak} day streak`}>
            {streak}d
          </span>
        )}
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={handleDelete}
          aria-label={`Delete ${habit.name}`}
        >
          &times;
        </button>
      </div>
    </li>
  );
}
