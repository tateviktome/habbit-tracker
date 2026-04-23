import type { Habit } from '../types';

export function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

export function isCompletedToday(habit: Habit): boolean {
  return habit.completions.includes(todayISO());
}

export function getStreak(habit: Habit): number {
  const sorted = [...habit.completions].sort().reverse();
  if (sorted.length === 0) return 0;

  const today = todayISO();
  const yesterday = dateOffset(-1);

  // Streak must include today or yesterday to be "active"
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    const expected = dateOffset(-(i), sorted[0]);
    if (sorted[i] === expected) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

export function getWeekDates(): string[] {
  const dates: string[] = [];
  const today = new Date();
  const day = today.getDay();
  // Start from Monday (day 1), adjust if Sunday (day 0)
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((day + 6) % 7));

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates.push(d.toISOString().split('T')[0]);
  }
  return dates;
}

export function getWeekCompletions(habit: Habit): boolean[] {
  const weekDates = getWeekDates();
  return weekDates.map(date => habit.completions.includes(date));
}

function dateOffset(days: number, from?: string): string {
  const d = from ? new Date(from + 'T00:00:00') : new Date();
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
