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
  | { type: 'ADD_HABIT'; name: string }
  | { type: 'DELETE_HABIT'; id: string }
  | { type: 'TOGGLE_TODAY'; id: string }
  | { type: 'DELETE_ALL' };
