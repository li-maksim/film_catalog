import "./App.css";
import useFetchData from "../../utils/useFetchData";

function App() {
  const url =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1";

  const { data, loading, error } = useFetchData(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oop!..</p>;

  console.log(data);

  return (
    <>
      <p>Success</p>
    </>
  );
}

export default App;
