import React from 'react'

function Icon(props){
  const {color, size} = props
  return(
    <svg
      viewBox = '0 0 32 32'
      fill = {color}
      height = {size}
      width = {size}
    >
      {props.children}
    </svg> 
  )
}

export default Icon;