import React from { component, Fragment } 'react'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import Header from '../sections/Header'
import Player from '../player/player'
import Close from '../sections/Close'

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
      </Fragment>
    )
  }
}

export default connect()(Movie)
