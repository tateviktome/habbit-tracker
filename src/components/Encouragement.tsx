import type { Habit } from '../types';
import { getStreak } from '../utils/habits';
import { getBestEncouragement } from '../utils/suggestions';
import styles from './Encouragement.module.css';

interface Props {
  habits: Habit[];
}

export function Encouragement({ habits }: Props) {
  const streaks = habits.map(h => ({ name: h.name, streak: getStreak(h) }));
  const message = getBestEncouragement(streaks);

  if (!message) return null;

  return (
    <div className={styles.banner} role="status" aria-live="polite">
      {message}
    </div>
  );
}
