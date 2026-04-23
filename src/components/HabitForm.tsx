import { useState, useRef } from 'react';
import { habitSuggestions } from '../utils/suggestions';
import styles from './HabitForm.module.css';

interface Props {
  onAdd: (name: string) => void;
  existingNames: string[];
}

export function HabitForm({ onAdd, existingNames }: Props) {
  const [name, setName] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const available = habitSuggestions.filter(
    s => !existingNames.some(n => n.toLowerCase() === s.toLowerCase())
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  }

  function handleSuggestionClick(suggestion: string) {
    onAdd(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  }

  return (
    <section className={styles.section} aria-label="Add a new habit">
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="habit-input" className={styles.srOnly}>
          Habit name
        </label>
        <input
          id="habit-input"
          ref={inputRef}
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter a new habit..."
          className={styles.input}
          autoComplete="off"
        />
        <button type="submit" className={styles.addBtn} disabled={!name.trim()}>
          Add
        </button>
      </form>

      <button
        type="button"
        className={styles.suggestBtn}
        onClick={() => setShowSuggestions(!showSuggestions)}
        aria-expanded={showSuggestions}
      >
        {showSuggestions ? 'Hide suggestions' : 'Need ideas?'}
      </button>

      {showSuggestions && available.length > 0 && (
        <ul className={styles.suggestions} role="list" aria-label="Habit suggestions">
          {available.map(s => (
            <li key={s}>
              <button
                type="button"
                className={styles.chip}
                onClick={() => handleSuggestionClick(s)}
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
