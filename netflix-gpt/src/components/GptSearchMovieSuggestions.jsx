import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchMovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gptMovies;
  if (!movieNames || !movieResults) {
    return (
      <div className="p-4 m-4 bg-black text-white">
        No suggestions available
      </div>
    );
  }

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {movieNames.map((movieName, index) => (
        <MovieList key={index} title={movieName} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptSearchMovieSuggestions;
