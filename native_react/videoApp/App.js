import React, {Component} from 'react'
import {StyleSheet, Text, ActivityIndicator, View} from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Home from './src/screems/Home'
import Header from './src/sections/Header'
import Suggestions from './src/video/suggestionsList'
import Categories from './src/video/CategoryList'
import Player from './src/player/player'
import API from './utils/api'
import Loadding from './src/sections/loadding'
import { store, persistor } from '/store/store'

//type Props = {}
export default class App extends Component {
  state = {
    // suggestionsList: [],
    // categoryList: [],
    loadding: true
  }

  async componentDidMount () {
    const suggestionsList = await API.getMovies()//API.getSuggestion(5)
    store.dispatch({ type: 'SET_SUGESTION_LIST', suggestionsList })
   
    const categoriesList= await API.getMovies()
    store.dispatch({ type: 'SET_CATEGORY_LIST', categoriesList })
   
    this.setState({
      // suggestionsList: movies,
      // categoryList: categories,
      loadding: false
    })
  }

  render() {
    return (
      <Provider store={store}>
      <PersistGate loadding={<Loadding />}>
        <Home>
          <Header />
          <Player />
          <Text>Buscador</Text>

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

        </Home>
      </PersistGate>
      </Provider>
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
  }
})
