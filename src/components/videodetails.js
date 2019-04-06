import React from "react";
import "../styles.css";

const videoDetail = video => {
  console.log("DDD" + video.video);
  if (video.video != null) {
    const videoId = video.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="video-detail col-md-8">
        <div className="embed-reponsive embed-resonsive-16by9">
          <iframe className="embed-reponsive-item" src={url} />
        </div>
        <div className="details">
          <div>{video.video.snippet.title}</div>
          <div>{video.video.snippet.description}</div>
        </div>
      </div>
    );
  } else {
    return <div>Loading ... </div>;
  }
};

export default videoDetail;
