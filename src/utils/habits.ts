import type { Habit } from '../types';

export function todayISO(override?: string): string {
  return override ?? new Date().toISOString().split('T')[0];
}

export function isCompletedToday(habit: Habit, today: string): boolean {
  return habit.completions.includes(today);
}

export function getStreak(habit: Habit, today: string): number {
  // Only consider completions up to and including "today"
  const validCompletions = habit.completions.filter(d => d <= today);
  const sorted = [...new Set(validCompletions)].sort().reverse();
  if (sorted.length === 0) return 0;

  // Streak must start from today or yesterday
  const yesterday = dateOffset(-1, today);
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;

  // Walk backwards from the most recent valid completion
  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    const expected = dateOffset(-1, sorted[i - 1]);
    if (sorted[i] === expected) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

export function getWeekDates(today: string): string[] {
  const dates: string[] = [];
  const todayDate = new Date(today + 'T00:00:00');
  const day = todayDate.getDay();
  const monday = new Date(todayDate);
  monday.setDate(todayDate.getDate() - ((day + 6) % 7));

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates.push(d.toISOString().split('T')[0]);
  }
  return dates;
}

export function getWeekCompletions(habit: Habit, today: string): boolean[] {
  const weekDates = getWeekDates(today);
  return weekDates.map(date => habit.completions.includes(date));
}

function dateOffset(days: number, from: string): string {
  const d = new Date(from + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

export function formatDayShort(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en', { weekday: 'short' });
}

export function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en', { month: 'short', day: 'numeric' });
}
