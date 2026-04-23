import { useState, useRef, useEffect } from 'react';
import { getTwoSuggestions, generatePersonalised } from '../utils/suggestions';
import styles from './HabitForm.module.css';

interface Props {
  onAdd: (name: string) => void;
  existingNames: string[];
}

export function HabitForm({ onAdd, existingNames }: Props) {
  const [name, setName] = useState('');
  const [quickSuggestions, setQuickSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuickSuggestions(getTwoSuggestions(existingNames));
  }, [existingNames]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName('');
    inputRef.current?.focus();
  }

  function handleSuggestionClick(suggestion: string) {
    onAdd(suggestion);
    inputRef.current?.focus();
  }

  function handleGenerate() {
    const suggestion = generatePersonalised(existingNames);
    if (suggestion) {
      onAdd(suggestion);
      inputRef.current?.focus();
    }
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
          placeholder="Type a habit or pick a suggestion..."
          className={styles.input}
          autoComplete="off"
        />
        <button type="submit" className={styles.addBtn} disabled={!name.trim()}>
          Add
        </button>
      </form>

      {quickSuggestions.length > 0 && (
        <div className={styles.suggestionsRow}>
          {quickSuggestions.map(s => (
            <button
              key={s}
              type="button"
              className={styles.suggestionCard}
              onClick={() => handleSuggestionClick(s)}
              aria-label={`Add habit: ${s}`}
            >
              <span className={styles.suggestionPlus}>+</span>
              <span className={styles.suggestionText}>{s}</span>
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        className={styles.generateBtn}
        onClick={handleGenerate}
        aria-label="Generate a personalised habit suggestion"
      >
        <span className={styles.generateIcon}>&#9733;</span>
        Generate a habit that would be best for me
      </button>
    </section>
  );
}
