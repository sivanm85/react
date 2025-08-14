import GptSearchInput from "./GptSearchInput";
import GptSearchMovieSuggestions from "./GptSearchMovieSuggestions";
import { BG_IMAGE_URL } from "../Utils/Constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 w-screen h-screen">
        <img className="w-full" src={BG_IMAGE_URL} alt="Netflix Logo" />
      </div>
      <GptSearchInput />
      <GptSearchMovieSuggestions />
    </div>
  );
};

export default GptSearch;
