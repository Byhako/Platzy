import React from 'react';
import Icon from './icon'

function Play(props){
  return(
    <Icon {...props}>
    {/* lo que esta aqui es el children de icon*/}
      <svg>
        <path d="M6 4l20 12-20 12z"></path>
      </svg>
    </Icon>
  )
}


export default Play;