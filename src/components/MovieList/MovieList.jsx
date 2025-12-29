import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

function MovieList({ movies, onCardClick }) {
  if (movies.length === 0) {
    return <p>Фильмы не найдены.</p>;
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
