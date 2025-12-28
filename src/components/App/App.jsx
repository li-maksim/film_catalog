import "./App.css";
import Header from "../Header/Header";
import MovieList from "../MovieList/MovieList";

function App() {
  const url =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1";

  return (
    <>
      <Header onSearch={() => {}} />
      <MovieList url={url} />
    </>
  );
}

export default App;
