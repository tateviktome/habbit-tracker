export interface Habit {
  id: string;
  name: string;
  createdAt: string;
  completions: string[];
}

export interface AppState {
  habits: Habit[];
}

export type Action =
  | { type: 'ADD_HABIT'; name: string; today: string }
  | { type: 'DELETE_HABIT'; id: string }
  | { type: 'TOGGLE_TODAY'; id: string; today: string }
  | { type: 'FILL_ALL_TODAY'; today: string }
  | { type: 'DELETE_ALL' };
