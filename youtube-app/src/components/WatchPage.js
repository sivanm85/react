import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row p-5">
      {/* Main Video Section */}
      <div className="flex-1">
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
      </div>

      {/* Sidebar: Suggested Videos */}
      <RelatedVideos videoId={videoId} />
    </div>
  );
};
export default WatchPage;
