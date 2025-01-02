import React, { useState } from "react";
import { useMyContext } from "../context/MyContext";

const SearchForm = () => {
  const { search, setSearch, setQuery } = useMyContext();
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) {
      setError(true);
      return;
    }

    setError(false);
    setQuery(search);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a movie..."
              className={`w-full px-4 py-2 rounded-lg border ${
                error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              } focus:outline-none transition duration-300`}
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">
                Please enter a valid movie name.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
