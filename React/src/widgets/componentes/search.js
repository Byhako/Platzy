import React from 'react';
import './search.css';
/*
function Search(props){
  return(
    <form></form>
  )
}*/

// al poner parentesis en lugar de llaves, retorna automaticamente
const Search = (props)=>(
  <form 
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      className="Search-input"
      placeholder="Busca tu video."
      name="busqueda"
      //defaultValue='Ruben'
      onChange={props.handleChange}
      value={props.value}
      />
  </form>
)


export default Search