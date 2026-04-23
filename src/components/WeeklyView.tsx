import type { Habit } from '../types';
import { getWeekDates, getWeekCompletions, formatDayShort, formatDateShort } from '../utils/habits';
import styles from './WeeklyView.module.css';

interface Props {
  habits: Habit[];
  today: string;
}

export function WeeklyView({ habits, today }: Props) {
  if (habits.length === 0) return null;

  const weekDates = getWeekDates(today);

  return (
    <section className={styles.section} aria-label="Weekly overview">
      <h2 className={styles.heading}>This Week</h2>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.habitCol}>Habit</th>
              {weekDates.map(date => (
                <th
                  key={date}
                  className={`${styles.dayCol} ${date === today ? styles.today : ''}`}
                >
                  <span className={styles.dayName}>{formatDayShort(date)}</span>
                  <span className={styles.dayDate}>{formatDateShort(date)}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits.map(habit => {
              const completions = getWeekCompletions(habit, today);
              return (
                <tr key={habit.id}>
                  <td className={styles.habitName}>{habit.name}</td>
                  {completions.map((done, i) => (
                    <td
                      key={weekDates[i]}
                      className={`${styles.cell} ${weekDates[i] === today ? styles.today : ''}`}
                    >
                      <span
                        className={`${styles.dot} ${done ? styles.done : ''}`}
                        aria-label={`${habit.name} on ${formatDayShort(weekDates[i])}: ${done ? 'completed' : 'not completed'}`}
                      />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
