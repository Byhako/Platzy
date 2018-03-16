import React, { Component } from 'react';
import Search from '../componentes/search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/index'

class SearchContainer extends Component{
  state = {
    value: 'busca'
  }
  
  handleSubmit = event =>{
    event.preventDefault(); // para evitar que recargue.
    this.props.actions.searchEntities(this.input.value)
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);