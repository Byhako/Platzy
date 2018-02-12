import React from 'react';
import './video-player-controls.css';

function VideoPlayercontols(props){
  return(
    <div className='VideoPlayerControls'>
      {props.children}
    </div>
  )
}

export default VideoPlayercontols;