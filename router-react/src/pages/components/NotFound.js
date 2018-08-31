import React, { PureComponent } from 'react';
import './generic-page.css';

class NotFound extends PureComponent {
  handleForward = () => {
    this.props.history.goForward()
  }

  handleBack = () => {
    // this.props.history.goBack()
    this.props.history.go(-1)
  }

  handleRandom = () => {
    const n = Math.round(Math.random()*(10 - 1) + 1)
    this.props.history.push(`/videos/?id=${n}`, {id: n})
  }

  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button className='Button' onClick={this.handleForward}>Ir a la siguiente página</button>
        <button className='Button' onClick={this.handleBack}>Ir a la página anterior</button>
        <button className='Button' onClick={this.handleRandom}>video aleatorio</button>
      </div>
    )
  }
}

export default NotFound
