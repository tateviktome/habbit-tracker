import type { Habit } from '../types';
import { HabitItem } from './HabitItem';
import styles from './HabitList.module.css';

interface Props {
  habits: Habit[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function HabitList({ habits, onToggle, onDelete }: Props) {
  if (habits.length === 0) {
    return (
      <section className={styles.empty} aria-label="Habits list">
        <p>No habits yet. Add one above to get started!</p>
      </section>
    );
  }

  return (
    <section aria-label="Your habits">
      <ul className={styles.list}>
        {habits.map(habit => (
          <HabitItem
            key={habit.id}
            habit={habit}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}
