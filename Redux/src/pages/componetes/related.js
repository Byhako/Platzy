import React from 'react';
import logo from '../../../images/logo.png';
import './related.css';
import ListaCategorias from './lista-categorias';

function Related(props){
  return (
    <div className="Related">
      <img src={logo} width={250}/>
      {
        props.categories.map((item)=>{
          return (
            <ListaCategorias
              key={item.get('id')}
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Related;