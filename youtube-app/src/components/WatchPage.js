import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log("Video ID from URL: ---> ", videoId);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row p-5">
      {/* Main Video Section */}
      <div className="">
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
        <CommentsContainer />
      </div>
      {/* Sidebar: Suggested Videos */}
      <div className="w-full lg:w-1/3 px-4">
        <div className="">
          <LiveChat />
        </div>
        <div className="py-4">
          <RelatedVideos videoId={videoId} />
        </div>
      </div>
    </div>
  );
};
export default WatchPage;
