import { useRef } from "react";
import LangConstant from "../Utils/LangConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/Openai";
import { API_OPTIONS } from "../Utils/Constant";
import { addGptMoviesResult } from "../Utils/GptSlice";

const GptSearchInput = () => {
  const languageSelected = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const handleGptSearch = async () => {
    const searchInputText = searchText.current.value;
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies based on the query: " +
      searchInputText +
      "only give me the name of the top 5 movies seperated by comma like example results ahead. Example Result : Gadar, Don, Golmaal, Sholay, Indian2";
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: gptQuery }],
    });
    const gptMovies = completion.choices[0]?.message.content.split(",");
    console.log("GPT-4o Response >>>----->>", gptMovies);

    // Search each movie in TMDB from above GPT search output
    const searchEachMovie = gptMovies.map((movie) => searchMovieInTMDB(movie));
    const TMDBResults = await Promise.all(searchEachMovie);
    console.log("TMDB Results >>>----->>", TMDBResults);
    dispatch(
      addGptMoviesResult({ moviesName: gptMovies, movieResults: TMDBResults })
    );
  };
  const searchMovieInTMDB = async (movieNames) => {
    // Implement TMDB search logic here
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieNames +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("TMDB Search Results >>>----->>", json.results);
    return json.results;
  };

  return (
    <div className="pt-[10%]">
      <form
        className="flex items-center justify-center p-4 bg-gray-100 shadow-md rounded-lg h-20 max-w-2xl mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={LangConstant[languageSelected]?.placeholderContent || ""}
          className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={handleGptSearch}
        >
          {LangConstant[languageSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchInput;
