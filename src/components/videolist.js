import React from "react";
import VideoListItem from "./videolistitem";

const VideoList = props => {
  const videoItem = props.videos.map(video => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return <ul className="col-md-12 list-group">{videoItem}</ul>;
};

export default VideoList;
