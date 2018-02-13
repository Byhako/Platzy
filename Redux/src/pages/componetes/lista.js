import React, { Component } from 'react';
import './lista.css';

class Lista extends Component{
  handleClick = event =>{
    this.props.openModal(this.props)
  }

  render(){
    return(
      <div className='Lista' onClick={ this.handleClick }>
        <p>{this.props.title}</p>
        <p className='author'>{this.props.author}</p>
      </div>
    )
  }
}

export default Lista;