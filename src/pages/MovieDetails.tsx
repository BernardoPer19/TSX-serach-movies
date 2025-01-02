import { Link, useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useDetails";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <p>Error: Movie ID not found.</p>;
  }

  const { movie, loading, error } = useMovieDetails(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching movie details.</p>;

  return (
    <main className="bg-gray-900 min-h-screen text-white">
      <Link className="bg-red-600 px-5 py-3 text-white m-6" to="/">Volver Atras</Link>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-none w-full md:w-1/3">
            <img
              src={movie?.Poster}
              alt={movie?.Title}
              className="w-full rounded-lg shadow-xl object-cover"
            />
          </div>

          {/* Right Side (Details Info) */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-4">{movie?.Title}</h1>
            <p className="text-lg text-gray-400">{movie?.Year}</p>

            {/* Additional Info */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="font-bold text-gray-300">Rated:</span>
                <span className="text-gray-400">{movie?.Rated}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-300">Released:</span>
                <span className="text-gray-400">{movie?.Released}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-300">Runtime:</span>
                <span className="text-gray-400">{movie?.Runtime}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-300">Genre:</span>
                <span className="text-gray-400">{movie?.Genre}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-300">Director:</span>
                <span className="text-gray-400">{movie?.Director}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-300">Actors:</span>
                <span className="text-gray-400">{movie?.Actors}</span>
              </div>
            </div>

            {/* Plot */}
            <div className="mt-6">
              <h3 className="font-bold text-xl">Plot:</h3>
              <p className="text-gray-300 mt-2">{movie?.Plot}</p>
            </div>

            {/* Ratings */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="font-bold text-gray-300">IMDB Rating:</span>
                <span className="text-gray-400">{movie?.imdbRating}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-300">Metascore:</span>
                <span className="text-gray-400">{movie?.Metascore}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-300">Awards:</span>
                <span className="text-gray-400">{movie?.Awards}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-300">BoxOffice:</span>
                <span className="text-gray-400">{movie?.BoxOffice}</span>
              </div>
            </div>

            {/* Additional Links */}
            <div className="mt-6">
              <a
                href={movie?.Website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
              >
                Official Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
