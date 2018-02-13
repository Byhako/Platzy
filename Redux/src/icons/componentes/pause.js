import React from 'react';
import Icon from './icon'

function Pause(props){
  return(
    <Icon {...props}>
    {/* lo que esta aqui es el children de icon*/}
      <svg>
        <path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
      </svg>
    </Icon>
  )
}


export default Pause;