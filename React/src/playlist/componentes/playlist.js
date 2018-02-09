import React from 'react';
import Media from './media';
import './playlist.css';
import Play from '../../icons/componentes/play';
import Pause from '../../icons/componentes/pause';
import Volume from '../../icons/componentes/volume';
import Full from '../../icons/componentes/fullScreen';

// Componente funcional.  No tiene ciclo de vida
function Playlist (props) {
  return(
    <div className='Playlist'>
      {console.log(props.title)}
      <h2>{props.description}</h2>
      <h1>{props.title}</h1>
      <Play size = {30} color = "black" />
      <Pause size = {30} color = "red" />
      <Volume size = {30} color = "green" />
      <Full size = {30} color = "blue" />
      <br/>
      {
        props.playlist.map((item)=>{
          return <Media {...item} key={item.id}/>
        })
      }
      <br/>
    </div>
  )
}


export default Playlist;