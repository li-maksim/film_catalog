import { useEffect, useRef } from "react";
import styles from "./MovieDetailsDialog.module.css";

function MovieDetailsDialog({ movie, isOpen, onClose }) {
  if (!movie) return;
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const posterUrl = movie.posterUrl;
  const name = movie.nameRu;
  const year = movie.year;
  const countries = movie.countries.map((c) => c.country).join(", ");
  const genres = movie.genres.map((g) => g.genre).join(", ");
  const description = movie.description;

  return (
    <dialog
      ref={dialogRef}
      className={styles.movieDetailsDialog}
      onClick={handleBackdropClick}
    >
      <div className={styles.movieDetailsDialog__content}>
        <button
          className={styles.movieDetailsDialog__closeButton}
          onClick={onClose}
          aria-label="Закрыть"
        >
          &times;
        </button>
        <div className={styles.movieDetailsDialog__header}>
          <h2
            id="movieDialogTitle"
            className={styles.movieDetailsDialog__title}
          >
            {name} ({year})
          </h2>
        </div>
        <div className={styles.movieDetailsDialog__body}>
          {posterUrl && (
            <img
              className={styles.movieDetailsDialog__image}
              src={posterUrl}
              alt={`Постер фильма ${name}`}
            />
          )}
          <div className={styles.movieDetailsDialog__info}>
            <p>
              <strong>Страны:</strong> {countries}
            </p>
            <p>
              <strong>Жанры:</strong> {genres}
            </p>
            <p>
              <strong>Описание:</strong> {description}
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default MovieDetailsDialog;
