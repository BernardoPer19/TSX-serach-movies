import { createContext, useState, ReactNode, useContext } from "react";
import useFetch, { MoviesTypes } from "../hooks/useFetch";

interface MyContextType {
  search: string;
  setSearch: (newValue: string) => void;
  movies: MoviesTypes[];
  loading: boolean;
  error: boolean;
  setQuery: (newValue: string) => void;
  query: string;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [query, setQuery] = useState<string>("matrix");
  const [search, setSearch] = useState<string>(query);
  const { movies, loading, error } = useFetch(query);

  return (
    <MyContext.Provider
      value={{ search, setSearch, movies, loading, error, setQuery, query }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext debe usarse dentro de MyContextProvider");
  }
  return context;
};
