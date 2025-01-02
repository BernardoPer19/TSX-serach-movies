import { useMyContext } from "../context/MyContext";
import useFetch from "../hooks/useFetch";
import { MovieCard } from "./MovieCard";

const MoviesList = () => {
  const { query } = useMyContext();
  const { movies, loading, error } = useFetch(query);

  if (loading)
    return <p className="text-center text-white text-lg font-semibold mt-6">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 text-lg font-semibold mt-6">Error fetching movies.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-white text-2xl font-bold mb-6 text-center">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie) => (
         <MovieCard movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
