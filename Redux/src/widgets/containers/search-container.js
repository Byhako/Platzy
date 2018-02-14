import React, { Component } from 'react';
import Search from '../componentes/search';
import { connect } from 'react-redux';
// connect a parte de dar propiedades a un componente
// para renderizar la aplicacion es dar la capacidad de
// utilizar dispatch como propiedad adicional
class SearchContainer extends Component{
  state = {
    value: 'busca'
  }
  
  handleSubmit = event =>{
    event.preventDefault(); // para evitar que recargue.
    console.log(this.input.value, 'submit')
    this.props.dispatch({
      type:'SEARCH_VIDEO',
      payload: {
        query: this.input.value,
      }
    })
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

// como el buscador no necesita de propiedades del estado
// no le pasamos parametros a connect
export default connect()(SearchContainer);