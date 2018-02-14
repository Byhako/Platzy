import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';
import Home from '../pages/containers/home';

// Data
import data from '../api.json';

const initialState = {
  data: {
    ...data
  }
}

const store = createStore(
  reducer,
  initialState,
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