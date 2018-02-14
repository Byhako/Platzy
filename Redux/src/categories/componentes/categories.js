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
          return <Media key={item.id} {...item}/>
        })
      }
      {
        props.categories.map((item)=>{
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        }) 
      }
    </div>
  )
}

export default Categories;