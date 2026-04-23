export const habitSuggestions = [
  'Drink 8 glasses of water',
  'Read for 20 minutes',
  'Exercise for 30 minutes',
  'Meditate for 10 minutes',
  'Write in a journal',
  'Take a walk outside',
  'Practice gratitude',
  'Get 8 hours of sleep',
  'No social media before noon',
  'Stretch for 10 minutes',
];

export function getEncouragement(streak: number, habitName: string): string | null {
  if (streak >= 30) return `Incredible! 30-day streak on "${habitName}" — this is who you are now.`;
  if (streak >= 14) return `Two weeks strong on "${habitName}"! You're building something real.`;
  if (streak >= 7) return `One week of "${habitName}" — that's momentum. Keep it rolling!`;
  if (streak >= 3) return `3 days in a row on "${habitName}" — nice start!`;
  return null;
}

export function getBestEncouragement(habits: { name: string; streak: number }[]): string | null {
  let best: string | null = null;
  let bestStreak = 0;

  for (const h of habits) {
    if (h.streak > bestStreak) {
      const msg = getEncouragement(h.streak, h.name);
      if (msg) {
        best = msg;
        bestStreak = h.streak;
      }
    }
  }
  return best;
}
