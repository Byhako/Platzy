import React from 'react';
import ListaCategoria from './lista-categoria';
import './lista-categorias.css';

function ListaCategorias(props){
  return(
    <div className='ListaCategorias'>
      <h2 className='ListaCategorias-title'>{props.title}</h2>
      <h4 className='ListaCategorias-author'>{props.description}</h4>
      <ListaCategoria
        handleOpenModal={props.handleOpenModal}
        playlist={props.playlist}
      />
    </div>
  )
}

export default ListaCategorias;