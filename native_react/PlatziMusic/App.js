/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

type Props = {};
export default class App extends Component<Props> {
  
  render() {
    return (
      <View style={styles.container}>
        <View styles={[styles.box, styles.red]} />
        <View styles={[styles.box, styles.green]} />
        <View styles={[styles.box, styles.blue]} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  //all screem
    flexDirection: 'column',
    justifyContent: 'center',
    // justifyContent: 'space-between',  // solo espacio entre elementos
    // justifyContent: 'space-arrow', // tengo en cuenta bordes
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap', // sobresale del contenedor, -> reorganiza elementos
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
  red: {
//    alignSelf: 'flex-end',
    flex: 2,
    backgroundColor: 'red'
  },
  green: {
    flex: 1,
    backgroundColor: 'green'
  },
  blue: {
//    alignSelf: 'flex-start',
    backgroundColor: 'blue'
  },
})
