import React from 'react';
import './full-screen.css';
import Full from '../../icons/componentes/fullScreen';

function FullScreen(props){
  return(
    <div
      className='FullScreen'
      onClick={props.handleFullScreenClick}
    >
      <Full
        size={25}
        color='white'
      />
    </div>
  )
}

export default FullScreen;