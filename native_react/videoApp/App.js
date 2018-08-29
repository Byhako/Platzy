import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Home from './src/screems/Home'

import Loading from './src/sections/loading'
import { store, persistor } from '/store/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loadding={<Loading />}>
          <Home />
        </PersistGate>
      </Provider>
    )
  }
}
