import React, {Component} from 'react'
import {StyleSheet, Text} from 'react-native'

import Home from './src/screems/Home'
import Header from './src/sections/Header'
import Suggestions from './src/video/suggestionsList'

//type Props = {}
export default class App extends Component {
  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Suggestions />
        <Text>categoria</Text>
      </Home>
    )
  }
}

const styles = StyleSheet.create({
  
})
