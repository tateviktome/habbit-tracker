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
  'Cook a healthy meal',
  'Learn something new',
  'Tidy up for 10 minutes',
  'Call a friend or family member',
  'Spend 15 minutes on a hobby',
];

export function getTwoSuggestions(existingNames: string[]): string[] {
  const available = habitSuggestions.filter(
    s => !existingNames.some(n => n.toLowerCase() === s.toLowerCase())
  );
  if (available.length === 0) return [];
  if (available.length === 1) return [available[0]];

  // Pick 2 random non-duplicate suggestions
  const first = Math.floor(Math.random() * available.length);
  let second = Math.floor(Math.random() * (available.length - 1));
  if (second >= first) second++;
  return [available[first], available[second]];
}

export function generatePersonalised(existingNames: string[]): string | null {
  // Smart suggestion based on what the user already tracks
  const categories: Record<string, string[]> = {
    fitness: ['Exercise for 30 minutes', 'Stretch for 10 minutes', 'Take a walk outside'],
    mindfulness: ['Meditate for 10 minutes', 'Practice gratitude', 'Write in a journal'],
    health: ['Drink 8 glasses of water', 'Get 8 hours of sleep', 'Cook a healthy meal'],
    learning: ['Read for 20 minutes', 'Learn something new', 'Spend 15 minutes on a hobby'],
    social: ['Call a friend or family member', 'No social media before noon'],
    productivity: ['Tidy up for 10 minutes'],
  };

  // Find which categories the user already has habits in
  const coveredCategories = new Set<string>();
  for (const [cat, habits] of Object.entries(categories)) {
    if (habits.some(h => existingNames.some(n => n.toLowerCase() === h.toLowerCase()))) {
      coveredCategories.add(cat);
    }
  }

  // Suggest from an uncovered category first (balance their life)
  const uncovered = Object.entries(categories).filter(([cat]) => !coveredCategories.has(cat));
  const pool = uncovered.length > 0 ? uncovered : Object.entries(categories);

  // Flatten and filter out existing
  const candidates = pool
    .flatMap(([, habits]) => habits)
    .filter(h => !existingNames.some(n => n.toLowerCase() === h.toLowerCase()));

  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

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
