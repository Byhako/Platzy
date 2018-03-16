import React from 'react';
import MediaContainer from '../container/media'
import './playlist.css';

// Componente funcional.  No tiene ciclo de vida
function Playlist (props) {
  return(
    <div className='Playlist'>
      {
        props.playlist.map((mediaId)=>{
          return (
            <MediaContainer
            id={mediaId}
            key={mediaId}
            openModal={props.handleOpenModal}
            />
        )
        })
      }
    </div>
  )
}

export default Playlist;