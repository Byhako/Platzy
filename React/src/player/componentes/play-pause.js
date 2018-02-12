import React from 'react';
import './play-pause.css';
import Play from '../../icons/componentes/play';
import Pause from '../../icons/componentes/pause';

function PlayPause(props){
  return(
    <div className="PlayPause">
      {
        props.pause ?  //si se cumple
          <button 
            onClick={props.handleClick}
          >
            <Play size={25} color="white"/>
          </button>
          :  // si no ...
          <button
            onClick={props.handleClick}
          >
            <Pause size={25} color="white"/>
          </button>
      }
      


    </div>
  )
}

export default PlayPause;