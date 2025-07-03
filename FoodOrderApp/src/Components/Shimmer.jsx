const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 20 }).map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-image"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text"></div>
        </div>
      ))}
    </div>
  );
};
export default Shimmer;
