const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-36 px-4 absolute pt-[20%] w-full text-white">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white px-6 py-2 rounded mr-4 hover:bg-gray-600 transition-colors">
          PlayMore
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
