import { useState, useEffect } from "react";


const useMovieDetails = (id: string) => {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=5d3c9105`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    
    useEffect(() => {
        fetchMovieDetails();
    if (id) {
      fetchMovieDetails();
    }



  }, [id]);

  return { movie, loading, error };
};

export default useMovieDetails;
