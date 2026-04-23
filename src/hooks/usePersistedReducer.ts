import { useReducer, useEffect, type Reducer, type Dispatch } from 'react';

export function usePersistedReducer<S, A>(
  reducer: Reducer<S, A>,
  initialState: S,
  storageKey: string
): [S, Dispatch<A>] {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  return [state, dispatch];
}
