import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
  };
}
export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div
      key={movie.imdbID}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
    >
      <img
        className="w-full h-64 object-cover"
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className="p-4">
        <h3 className="text-lg text-white font-semibold truncate">
          {movie.Title}
        </h3>
        <p className="text-gray-400 mt-1">{movie.Year}</p>
        <Link
          className="text-blue-500 hover:underline"
          to={`/movie/${movie.imdbID}`}
        >
          Ver Más Info
        </Link>
      </div>
    </div>
  );
};
