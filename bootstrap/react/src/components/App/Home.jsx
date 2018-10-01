import React, { Component, Fragment } from 'react'
import './home.styl'

import react from '../../images/react.png'
import redux from '../../images/redux.png'
import stylus from '../../images/stylus.png'
import webpack from '../../images/webpack.png'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <nav className='nav'> Enjoy hacking with React </nav>
        <div className="row">
          <img src={react} alt="react"/>
          <img src={stylus} alt="stylus"/>
          <img src={redux} alt="redux"/>
        </div>
        <div className="row">
          <img id='webpack' src={webpack} alt="webpack"/>
        </div>

        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <button type="button" class="btn miboton">Success</button>
      </Fragment>
    )
  }
}

export default Home
