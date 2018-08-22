import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableHighlight, 
  TouchableOpacity, TouchableWithoutFeedback, } from 'react-native'

export default class extends Component {

  render () {
    return (
      <View style={styles.container}>
        {/*player pausa*/}
        <TouchableHighlight
          onPress={this.props.playPause}
          style={styles.containerTouch}
          underlayColor="#BE2EE2"
          hitSlop={{ left: 5, top: 5, bottom: 5, right: 5 }}
        >
          {
            this.props.paused ?
            <Text style={styles.button}>PLAY</Text>
            :
            <Text style={styles.button}>PAUSE</Text>
          }
        </TouchableHighlight>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,.3)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 35,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  containerTouch: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  },
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  }
})