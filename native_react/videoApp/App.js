import React, {Component} from 'react'
import {StyleSheet, Text, ActivityIndicator, View} from 'react-native'
import Video from 'react-native-video'

import Home from './src/screems/Home'
import Header from './src/sections/Header'
import Suggestions from './src/video/suggestionsList'
import Categories from './src/video/CategoryList'

import API from './utils/api'

//type Props = {}
export default class App extends Component {
  state = {
    suggestionsList: [],
    categoryList: [],
    loadding: true
  }

  async componentDidMount () {
    const movies = await API.getMovies()//API.getSuggestion(5)
    const categories = await API.getMovies()
    console.log('m:', movies)
    this.setState({
      suggestionsList: movies,
      categoryList: categories,
      loadding: false
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <View style={styles.containerVideo}>
          <Video
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode="contain"
          />
        </View>
        <Text>Buscador</Text>

        {this.state.loadding ?
          <View>
            <ActivityIndicator size='large' color='#BE2EE2' />
            <Text style={styles.cargando}>Cargando</Text>
          </View>
          :
          <View style={styles.container}>
            <Categories list={this.state.categoryList} />
            <Suggestions list={this.state.suggestionsList} />
          </View>
        }

      </Home>
    )
  }
}

const styles = StyleSheet.create({
  cargando: {
    fontSize: 20,
    color: '#BE2EE2',
    textAlign: 'center'
  },
  container: {
    flex: 1
  },
  containerVideo: {
    //flex: 1,
    height: 150 
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})
