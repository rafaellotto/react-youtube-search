import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) return <div className="h3 d-block m-auto">Carregando...</div>

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="col-lg-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={url}
          title="videoplayer"
          className="embed-responsive-item"
          allowFullScreen="allowFullScreen"
          frameBorder="0"
           />
      </div>
      <div>
        <p className="text-center">{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
