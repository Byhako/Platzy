import React, {Component}  from 'react'
import {connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import Heart from './Heart'

class Portada extends Component {
  renderHeart = () => {
    const hearts = new Array(100).fill({})
    return (
      hearts.map((element, index) => {
        const style = {
          left: Math.floor((Math.random() * (window.innerWidth - 0))) + 0 + 'px',
          animationDelay: Math.floor((Math.random() * (10000 - 0))) + 0 + 'ms'
        }
        return (
          <Heart key={index} style={style}/>
        )
      })
    )
  }

  render () {
    return (
      <section id="portada" className={`portada background ${this.props.isAnimated}`}> 
        <header id="header" className="header contenedor"> 
          <figure className="logotipo">
            <img src={this.props.logo} width="186" height="60" alt="Invie logotipo"/>
          </figure>
    
          <span className="burguer-button icon-menu" id="burguer-button"></span>

          <nav className="menu" id="menu"> 
            <ul>
              {this.props.menu.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </header>
        <CSSTransitionGroup
          transitionName='animationInOut'
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        >
          {!this.props.isAnimated &&
            <div className="contenedor" key='portal'>
              <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
              <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
              <a className="button" href="#guitarras">Conoce mas</a>
            </div>
          }
        </CSSTransitionGroup>
        { this.props.isAnimated && this.renderHeart() }
      </section>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    logo: state.logoPortada,
    menu: state.menu,
    isAnimated: state.isAnimated
  }
}

export default connect(mapStateToProps)(Portada)