import type { Habit } from '../types';
import { HabitItem } from './HabitItem';
import styles from './HabitList.module.css';

interface Props {
  habits: Habit[];
  today: string;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onDeleteAll: () => void;
}

export function HabitList({ habits, today, onToggle, onDelete, onDeleteAll }: Props) {
  if (habits.length === 0) {
    return (
      <section className={styles.empty} aria-label="Habits list">
        <p>No habits yet. Add one above to get started!</p>
      </section>
    );
  }

  return (
    <section aria-label="Your habits">
      <div className={styles.header}>
        <span className={styles.count}>{habits.length} habit{habits.length !== 1 ? 's' : ''}</span>
        <button
          type="button"
          className={styles.deleteAllBtn}
          onClick={onDeleteAll}
          aria-label="Delete all habits"
        >
          Delete all
        </button>
      </div>
      <ul className={styles.list}>
        {habits.map(habit => (
          <HabitItem
            key={habit.id}
            habit={habit}
            today={today}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}
