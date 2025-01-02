import { useEffect, useState } from "react";

export interface MoviesTypes {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}


const useFetch = (query:string) => {
  const [movies, setMovies] = useState<MoviesTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchMovies = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=5d3c9105`); // Utilizamos directamente `API_KEY`
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      setMovies(data.Search || []); // Aseguramos que siempre devolvemos un array
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(); // Llama al fetch automáticamente al montar el componente
  }, [query]);

  return { movies, error, loading };
};

export default useFetch;
