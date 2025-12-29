import "./App.css";
import useFetchData from "../../utils/useFetchData";
import { useState } from "react";
import Header from "../Header/Header";
import MovieList from "../MovieList/MovieList";

function App() {
  const url =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1";
  const { data, loading, error } = useFetchData(url);
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка...</p>;

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  let filteredMovies = data.items;

  if (searchQuery) {
    const queryLowercase = searchQuery.toLowerCase();
    filteredMovies = data.items.filter((movie) => {
      const name = movie.nameRu?.toLowerCase() || "";
      return name.includes(queryLowercase);
    });
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <MovieList movies={filteredMovies} />
    </>
  );
}

export default App;
