import "../styles/App.css";

export const Video = () => {
  return (
    <div className="video-container">
      <div className="video">
        {
          <iframe
            className="video-size"
            width="280"
            height="158"
            src="https://www.youtube.com/embed/mv_5oD6CgLU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        }
      </div>
    </div>
  );
};
