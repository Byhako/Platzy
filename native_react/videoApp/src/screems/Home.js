import React, { Component } from 'react'
import {StyleSheet, Text, ActivityIndicator, View} from 'react-native'
import { connect } from 'react-redux'

import Header from '../sections/Header'
import Movie from './movie'
import Suggestions from '../video/suggestionsList'
import Categories from '../video/CategoryList'
import API from '../../utils/api'
import Search from '../sections/Search'

class Home extends Component {
  state = {
    // suggestionsList: [],
    // categoryList: [],
    loadding: true
  }

  async componentDidMount () {
    const suggestionsList = await API.getMovies()//API.getSuggestion(5)
    this.props.dispatch({ type: 'SET_SUGESTION_LIST', suggestionsList })
   
    const categoriesList= await API.getMovies()
    this.props.dispatch({ type: 'SET_CATEGORY_LIST', categoriesList })
   
    this.setState({
      // suggestionsList: movies,
      // categoryList: categories,
      loadding: false
    })
  }

  render () {
    return (
      {this.props.selectedMovie ?
        <Movie />
      :
        <View>
          <Header />
          <Search />

          {this.state.loadding ?
            <View>
              <ActivityIndicator size='large' color='#BE2EE2' />
              <Text style={styles.cargando}>Cargando</Text>
            </View>
            :
            <View style={styles.container}>
              <Categories />  {/*list={this.state.categoryList} />*/}
              <Suggestions />  {/*list={this.state.suggestionsList} />*/}
            </View>
          }
        </View>
      }
    )
  }
}

function mapStateToProps (state, props) {
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(Home)

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
  }
})
