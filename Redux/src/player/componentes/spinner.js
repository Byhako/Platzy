import React from 'react';
import './spinner.css';

function Spinner(props){
  if(!props.active) return null
  return(
    <div className="Spinner">
      <span>cargando...</span>
    </div>
  )
}

export default Spinner;