import SearchForm from "../SearchForm/SearchForm";
import styles from "./Header.module.css";

function Header({ onSearch }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Каталог Фильмов</h1>
      <SearchForm onSearch={onSearch} />
    </header>
  );
}

export default Header;
