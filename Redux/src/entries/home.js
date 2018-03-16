import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/index'
import Home from '../pages/containers/home'
import normalizeData from '../schemas/index'
import { Map as map} from 'immutable'

// function logger({getState, dispatch}) {
//   return (next) => {
//     return (action) => {
      
//       console.log('accion: ', action)
//       const value = next(action)
//       console.log('nuevo estado : ', getState().toJS())
      
//       return value
//     }
//   }
// }

const logger = ({getState, dispatch}) => next => action => {
  console.log('accion: ', action)
  const value = next(action)
  console.log('nuevo estado : ', getState().toJS())  
  return value
}

const store = createStore(
  reducer,
  map(),
  //enhancer
  applyMiddleware(logger)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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