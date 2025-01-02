import MoviesList from "../components/MovieList";
import SearchForm from "../components/SearchForm";


export const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <SearchForm />
      <MoviesList />
    </div>
  );
};
