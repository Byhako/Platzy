import React, { Component } from 'react';
import Search from '../componentes/search';

class SearchContainer extends Component{
  state = {
    value: 'Selene'
  }
  
  handleSubmit = event =>{
    event.preventDefault(); // para evitar que recargue.
    console.log(this.input.value)
  }

  setInputRef = elemento =>{
    this.input = elemento
  }

  handleInputChange = event => {
    this.setState({
      value: this.input.value.replace(' ','-')
      //value: event.target.value
    })
  }

  render(){
    return(
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

export default SearchContainer;