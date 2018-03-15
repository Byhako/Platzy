import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/index'
import Home from '../pages/containers/home'
import normalizeData from '../schemas/index'
import { Map as map} from 'immutable'

const store = createStore(
  reducer,
  map(),
  //enhancer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const homeContainer = document.getElementById('home-container');

// high order component

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);