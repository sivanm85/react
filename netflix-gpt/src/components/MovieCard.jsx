import { CDN_IMAGE_URL } from "../Utils/Constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie card" src={CDN_IMAGE_URL + posterPath} />
    </div>
  );
};
export default MovieCard;
