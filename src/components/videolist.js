import React from "react";
import VideoListItem from "./videolistitem";
import "../styles.css";

const VideoList = props => {
  const videoItem = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-12 list-group">{videoItem}</ul>;
};

export default VideoList;
