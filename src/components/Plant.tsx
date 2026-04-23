import type { Habit } from '../types';
import { getStreak } from '../utils/habits';
import styles from './Plant.module.css';

interface Props {
  habits: Habit[];
  today: string;
}

interface PlantStage {
  name: string;
  emoji: string;
  description: string;
  minStreak: number;
}

const stages: PlantStage[] = [
  { name: 'Empty Pot', emoji: '🪴', description: 'Start a streak to plant a seed!', minStreak: 0 },
  { name: 'Seed', emoji: '🌰', description: 'A seed has been planted...', minStreak: 1 },
  { name: 'Sprout', emoji: '🌱', description: 'Your sprout is showing!', minStreak: 3 },
  { name: 'Seedling', emoji: '🌿', description: 'Growing stronger every day.', minStreak: 7 },
  { name: 'Bloom', emoji: '🌻', description: 'Beautiful! Keep it going!', minStreak: 14 },
  { name: 'Tree', emoji: '🌳', description: 'A mighty tree. You\'re unstoppable.', minStreak: 30 },
];

function getStage(streak: number): PlantStage {
  let current = stages[0];
  for (const stage of stages) {
    if (streak >= stage.minStreak) current = stage;
  }
  return current;
}

export function Plant({ habits, today }: Props) {
  if (habits.length === 0) return null;

  const bestStreak = Math.max(0, ...habits.map(h => getStreak(h, today)));
  const completedToday = habits.some(h => h.completions.includes(today));
  const wilting = habits.length > 0 && !completedToday && bestStreak === 0;

  const stage = getStage(bestStreak);
  const stageIndex = wilting ? -1 : stages.indexOf(stage);

  return (
    <section className={styles.container} aria-label="Your habit plant">
      <div className={styles.card}>
        <div className={`${styles.plantEmoji} ${wilting ? styles.wilting : ''}`}>
          {wilting ? '🥀' : stage.emoji}
        </div>
        <div className={styles.info}>
          <span className={styles.stageName}>
            {wilting ? 'Wilting...' : stage.name}
          </span>
          <span className={styles.description}>
            {wilting ? 'Complete a habit to revive your plant!' : stage.description}
          </span>
        </div>

        <div className={styles.stagesTrack}>
          <div
            className={styles.stagesProgress}
            style={{ width: stageIndex >= 0 ? `${(stageIndex / (stages.length - 1)) * 100}%` : '0%' }}
          />
          {stages.map((s, i) => {
            const reached = !wilting && i <= stageIndex;
            const isCurrent = !wilting && i === stageIndex;
            return (
              <div
                key={s.name}
                className={`${styles.stageNode} ${reached ? styles.reached : ''} ${isCurrent ? styles.current : ''}`}
                title={`${s.name} — ${s.minStreak}d streak`}
              >
                <span className={styles.stageEmoji}>{s.emoji}</span>
                <span className={styles.stageDay}>{s.minStreak}d</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
