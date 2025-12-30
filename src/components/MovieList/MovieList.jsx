import MovieCard from "../MovieCard/MovieCard";
import { LoaderCircle } from "lucide-react";
import styles from "./MovieList.module.css";

function MovieList({ movies, loading, error, onCardClick }) {
  if (loading)
    return (
      <div className={styles.loader}>
        <div className={styles.loader__circle}>
          <LoaderCircle size={36} />
        </div>
      </div>
    );
  if (error)
    return <p className={styles.movieList__error}>Произошла ошибка...</p>;
  if (movies.length === 0) {
    return <p className={styles.movieList__error}>Фильмы не найдены.</p>;
  }

  return (
    <section className={styles.movieList}>
      <ul className={styles.movieList__grid}>
        {movies.map((movie) => (
          <li key={movie.kinopoiskId} className={styles.movieList__item}>
            <MovieCard movie={movie} onClick={onCardClick} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieList;
