import styles from './Header.module.css';

export function Header() {
  const today = new Date().toLocaleDateString('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Habit Tracker</h1>
      <p className={styles.date}>{today}</p>
    </header>
  );
}
