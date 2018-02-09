import React from 'react';
import Playlist from './playlist';

function Contenido(props){
  const categorias = props.data.categories;

  return(
    <div>
      {
        categorias.map((categoria)=>{
          return(
            <Playlist
              description = {categoria.description}
              title = {categoria.title}
              id = {categoria.id}
              playlist = {categoria.playlist}
            />
          )
        })
      }
    </div>
  )
}

export default Contenido;