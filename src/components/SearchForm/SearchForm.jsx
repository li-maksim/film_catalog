import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./SearchForm.module.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery === "") {
      setQuery("");
      onSearch("");
    } else {
      setQuery(newQuery);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
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
        {query && (
          <button
            type="button"
            className={styles.searchForm__clearButton}
            onClick={handleClear}
            aria-label="Очистить поиск"
          >
            &times;
          </button>
        )}
        <button
          className={styles.searchForm__button}
          type="submit"
          aria-label="Поиск"
        >
          <Search size={16} />
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
