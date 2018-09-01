import React, { Fragment, Component} from 'react'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Map as map } from 'immutable'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import NotFound from '../components/NotFound'
import reducer from '../../reducers/index'
import Header from '../components/header'
import Home from '../components/home'
import Videos from './videos'



const logger_ = ({getState, dispatch }) => next => action => {
  console.log('este es mi viejo estado', getState().toJS())
  console.log('vamos a enviar está acción', action);
  const value = next(action)
  console.log('este es mi nuevo estado', getState().toJS())
  return value
}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
)



export default class extends Component {
  render () {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            <Redirect from='/v' to='/videos' />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Provider>
    )
  }
}




