import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const imageTitle = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;

  return (
    <li
      className="list-group-item"
      onClick={ () => onVideoSelect(video) }
    >
      <div className="media">
        <img
          className="align-self-center mr-3"
          src={imageUrl}
          alt={imageTitle} />
        <div className="media-body">
          <div className="h5 mt-0">
            {imageTitle}
          </div>
          <div>{channelTitle}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
