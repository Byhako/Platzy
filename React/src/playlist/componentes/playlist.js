import React from 'react';
import Media from './media';
import './playlist.css';

// Componente funcional.  No tiene ciclo de vida
function Playlist (props) {
  const playlist = props.data.categories[0].playlist
  return(
    <div className='Playlist'>
      {
        playlist.map((item)=>{
          //return <Media title={item.title} key={item.id} image={item.cover}/>
          return <Media {...item} key={item.id}/>            
        })
      }
    </div>
  )
}


export default Playlist;