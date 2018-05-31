import React, { Component } from 'react'

class Heart extends Component {
  render () {
    return (
      <div className='like is-like' style={this.props.style}> </div>
    )
  }
}

export default Heart