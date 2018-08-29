import React from { component, Fragment } 'react'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'

import Header from '../sections/Header'
import Player from '../player/player'

class Movie extends from component {
  render () {
    return (
      <Fragment>
        <Header />
        <Player />
      </Fragment>
    )
  }
}

export default Movie
