import React, { Component } from 'react'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import Video from 'react-native-video'

export default class extends Component {
  state = {
    loadding: true
  }

  onBuffer = ({ isBuffering }) => this.setState({loadding: isBuffering})  

  onLoad = () => this.setState({loadding: false})

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Video
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}  // ios
            onLoad={this.onLoad}
          />
        </View>
        {this.state.loadding &&
          <View style={styles.overlay}>
            <ActivityIndicator size='large' color='#BE2EE2'/>
          </View>
        }
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%'  // proporcion de 16/9
  },
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'black'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})
