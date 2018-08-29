import React from { component, Fragment } 'react'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import Header from '../sections/Header'
import Player from '../player/player'
import Close from '../sections/Close'
import Details from '../video/Details'

class Movie extends from component {
  handleClose = () => {
    this.props.dispatch({type: 'SET_SELECTED_MOVIE', movie: null})
  }

  render () {
    return (
      <Fragment>
        <Header>
          <Close onPres={this.handleClose} />
        </Header>
        <Player />
        <Details {...this.props.movie}/>
      </Fragment>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    movie: state.selectedMovie
  }
}
export default connect(mapStateToProps)(Movie)
