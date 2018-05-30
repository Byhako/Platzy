import React, { Component } from 'react'
import {connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Guitarras extends Component {
  render () {
    return (
      <section id="guitarras" className="guitarras contenedor">
        <h2>Nuestra guitarras</h2>
        {
          this.props.guitarras.map((guitarra, index) => {
            return (
              <article className="guitarra" key={index}>
                <CSSTransitionGroup
                  transitionName='flicker'
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                >
                  <img
                    className="guitarra-image"
                    key={guitarra.image}
                    src={guitarra.image}
                    alt={guitarra.alt}
                    width="350"/>
                </CSSTransitionGroup>
              
                <CSSTransitionGroup
                  transitionName='fade'
                  transitionEnterTimeout={300}
                  transitionLeave={false}
                >
                  <div className="contenedor-guitarra" key={guitarra.name}>
                    <h3 className="guitarra-name" key={guitarra.name}>{guitarra.name}</h3>
                    <ol>
                      {
                        guitarra.features.map((feature, index) => {
                          return (
                            <li key={index}>{feature}</li>
                          )
                        })
                      }
                    </ol>
                  </div>
                </CSSTransitionGroup>
              </article>
            )
          })
        }
      </section>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    guitarras: state.guitarras,
  }
}

export default connect(mapStateToProps)(Guitarras)