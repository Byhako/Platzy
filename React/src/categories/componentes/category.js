import React from 'react';
import Playlist from '../../playlist/componentes/playlist'

function Category(props){
  return(
    <div>
      <p>{props.description}</p>
      <h2>{props.title}</h2>
      <Playlist 
        playlist = {props.playlist}
      />
    </div>
  )
}

export default Category;