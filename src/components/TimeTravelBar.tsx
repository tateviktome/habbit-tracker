import { todayISO } from '../utils/habits';
import styles from './TimeTravelBar.module.css';

interface Props {
  currentDate: string;
  onChange: (date: string) => void;
  onFillAll: () => void;
  allCompleted: boolean;
  hasHabits: boolean;
}

export function TimeTravelBar({ currentDate, onChange, onFillAll, allCompleted, hasHabits }: Props) {
  const realToday = todayISO();
  const isTimeTravel = currentDate !== realToday;

  function shift(days: number) {
    const d = new Date(currentDate + 'T00:00:00');
    d.setDate(d.getDate() + days);
    onChange(d.toISOString().split('T')[0]);
  }

  return (
    <div className={`${styles.bar} ${isTimeTravel ? styles.active : ''}`}>
      <button className={styles.btn} onClick={() => shift(-1)} aria-label="Go back one day">&larr;</button>
      <input
        type="date"
        value={currentDate}
        onChange={e => onChange(e.target.value)}
        className={styles.datePicker}
        aria-label="Select date"
      />
      <button className={styles.btn} onClick={() => shift(1)} aria-label="Go forward one day">&rarr;</button>
      {hasHabits && !allCompleted && (
        <button className={styles.fillBtn} onClick={onFillAll} aria-label="Complete all habits for this day">
          Complete all
        </button>
      )}
      {hasHabits && allCompleted && (
        <span className={styles.doneBadge}>All done</span>
      )}
      {isTimeTravel && (
        <button className={styles.resetBtn} onClick={() => onChange(realToday)}>
          Today
        </button>
      )}
    </div>
  );
}
