import React from "react";

const VideoListItem = video => {
  console.log(video);
  const onVideoSelect = video.onVideoSelect;
  const imageUrl = video.video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video.video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
          <div className="media-body">
            <div className="media-heading">{video.video.snippet.title}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
