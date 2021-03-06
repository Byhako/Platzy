import React from 'react';
import Category from './category'
import './categories.css';
import SearchContainer from '../../widgets/containers/search-container';
import Media from '../../playlist/componentes/media';

function Categories(props){
  return(
    <div className="Categories">
      <SearchContainer/>
      {
        props.search.map((item)=>{
          return <Media openModal={props.handleOpenModal} {...item.toJS()} key={item.get('id')}/>
        })
      }
      {
        props.categories.map((item)=>{
          return (
            <Category
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

export default Categories;