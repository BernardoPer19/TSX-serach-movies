import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/movie/:id" element={<MovieDetails/>}/>
  </Routes>
);

export default App;
