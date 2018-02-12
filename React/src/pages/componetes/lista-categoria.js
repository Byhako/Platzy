import React, { Component } from 'react';
import Lista from './lista';

function ListaCategoria(props){
  return(
    <div>
      {
        props.playlist.map((item)=>{
          return(
            <Lista
              key={item.id}
              {...item}
              openModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default ListaCategoria;