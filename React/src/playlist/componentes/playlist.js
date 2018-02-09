import React from 'react';
import Media from './media';
import './playlist.css';
import Play from '../../icons/componentes/play';

// Componente funcional.  No tiene ciclo de vida
function Playlist (props) {
  // importo datos
  //const playlist = props.data.categories[0].playlist;
  const categorias = props.data.categories;
  const playlist = categorias[0].playlist
  
  //categorias.length
  const lista = [0,1,2]
  return(
    <div className='Playlist'>
      <Play
        size = {50}
        color = "red"
      />
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