import { useState } from "react";
import styles from "./SearchForm.module.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <section className={styles.searchForm}>
      <form className={styles.searchForm__form} onSubmit={handleSubmit}>
        <input
          className={styles.searchForm__input}
          type="text"
          placeholder="Найти фильм..."
          value={query}
          onChange={handleInputChange}
          name="query"
          required
        />
        <button
          className={styles.searchForm__button}
          type="submit"
          aria-label="Поиск"
        >
          🔍
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
