import React from 'react';
import Icon from './icon'

function Full(props){
  return(
    <Icon {...props}>
    {/* lo que esta aqui es el children de icon*/}
      <svg>
      <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
      <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
      <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
      <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
      </svg>
    </Icon>
  )
}


export default Full;