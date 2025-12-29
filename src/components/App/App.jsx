import "./App.css";
import useFetchData from "../../utils/useFetchData";
import { useState, useMemo, useCallback } from "react";
import Header from "../Header/Header";
import MovieList from "../MovieList/MovieList";
import MovieDetailsDialog from "../MovieDetailsDialog/MovieDetailsDialog";

function App() {
  const url =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1";
  const { data, loading, error } = useFetchData(url);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredMovies = useMemo(() => {
    if (searchQuery === "") {
      return data.items;
    }

    const queryLowercase = searchQuery.toLowerCase();
    return data.items.filter((movie) => {
      const name = movie.nameRu.toLowerCase();
      return name.includes(queryLowercase);
    });
  }, [data, searchQuery]);

  const handleSearch = useCallback(
    (query) => {
      setSearchQuery(query);
    },
    [setSearchQuery]
  );

  const openMovieDetails = useCallback(
    (movie) => {
      setSelectedMovie(movie);
      setIsDialogOpen(true);
    },
    [setSelectedMovie, setIsDialogOpen]
  );

  const closeMovieDetails = useCallback(() => {
    setIsDialogOpen(false);
    setSelectedMovie(null);
  }, [setIsDialogOpen, setSelectedMovie]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка...</p>;

  return (
    <>
      <Header onSearch={handleSearch} />
      <MovieList movies={filteredMovies} onCardClick={openMovieDetails} />
      <MovieDetailsDialog
        movie={selectedMovie}
        isOpen={isDialogOpen}
        onClose={closeMovieDetails}
      />
    </>
  );
}

export default App;
