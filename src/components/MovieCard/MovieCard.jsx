import styles from "./MovieCard.module.css";

function MovieCard({ movie, onClick }) {
  const posterUrl = movie.posterUrl;
  const name = movie.nameRu;
  const year = movie.year;

  return (
    <article className={styles.movieCard} onClick={() => onClick(movie)}>
      <img
        className={styles.movieCard__image}
        src={posterUrl}
        alt={`Постер фильма ${movie.nameRu}`}
      />
      <div className={styles.movieCard__info}>
        <h3 className={styles.movieCard__title}>{name}</h3>
        <p className={styles.movieCard__year}>{year}</p>
      </div>
    </article>
  );
}

export default MovieCard;
