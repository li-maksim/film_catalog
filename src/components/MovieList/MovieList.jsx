import MovieCard from "../MovieCard/MovieCard";
import useFetchData from "../../utils/useFetchData";
import styles from "./MovieList.module.css";

function MovieList({ url }) {
  const { data, loading, error } = useFetchData(url);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка...</p>;

  console.log(data);

  const movies = data.items;

  if (!movies || movies.length === 0) {
    return <p>Фильмы не найдены.</p>;
  }

  return (
    <section className={styles.movieList}>
      <ul className={styles.movieList__grid}>
        {movies.map((movie) => (
          <li key={movie.kinopoiskId} className={styles.movieList__item}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieList;
