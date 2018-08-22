import React, {Component} from 'react'
import {StyleSheet, Text, ActivityIndicator, View} from 'react-native'

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
    const movies = await API.getSuggestion(10)
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
        <Text>Buscador</Text>
        <Text>categoria</Text>
        {
          this.state.loadding &&
          <View>
            <ActivityIndicator size='large' color='#BE2EE2' />
            <Text style={styles.cargando}>Cargando</Text>
          </View>
        }
        {!this.state.loadding && 
        <View>
        <Categories list={this.state.categoryList} />
          
        </View>    
        }
        {!this.state.loadding && 
            <Suggestions list={this.state.suggestionsList} />
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
  }
})
