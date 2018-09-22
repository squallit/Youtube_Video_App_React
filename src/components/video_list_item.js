import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // ({video}) <=> const VideoListItem = (props) and const video = props.video
  console.log(video);

  const imageURL = video.snippet.thumbnails.default.url;

  return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageURL}/>
          </div>

          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
  )
}

export default VideoListItem;
