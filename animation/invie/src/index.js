import React from 'react';
import ReactDOM from 'react-dom';
import cheet from 'cheet.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import Invie from './components/Invie'
import registerServiceWorker from './registerServiceWorker'
import logoPortada from "./images/invie.png"
import g1 from "./images/invie-acustica.png"
import g2 from "./images/invie-classic.png"
import g3 from "./images/easter-a.png"
import g4 from "./images/easter-b.png"

import './css/invie.css'
import './css/animation.css'

const initialState = {
  isAnimated: false,
  menu: [
    {href: 'index.html', title: 'Home'},
    {href: '#guitarras.html', title: 'Guitarras'},
    {href: 'precios.html', title: 'Precios'},
  ],
  logoPortada,
  guitarras: [
    {image: g1,
    alt: 'Guitarra Invie Acustica',
    name: 'Invie Acustica',
    features: [
                'Estilo vintage',
                'Madera pura',
                'Incluye estuche invisible de aluminio'
              ]
    },
    {image: g2,
      alt: 'Guitarra Invie classNameic',
      name: 'Invie classNameic',
      features: [
                  'Estilo vintage',
                  'Liviana',
                  'Inicia tu camino como Rockstar'
                ]
    }
  ]
}

function reducer (state, action) {
  switch (action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.props
      return {...state, ...newProps}
    }
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

const easter = {
  isAnimated: 'is-animated',
  menu: [
    {href: 'index.html', title: 'Home'},
  ],
  guitarras: [
    {image: g3,
      alt: 'Guitarra padre de familia',
      name: 'Invie Padre',
      features: [
                  'Copiar Simpson',
                  'Aire pura',
                  'Incluye manopla invisible para tu papa'
                ]
      },
      {image: g4,
        alt: 'Guitarra Invie classNameic',
        name: 'Invie anime',
        features: [
          'Estilo shoen',
          'Sexy',
          'Muestra lo que llevas en el Kokoro'
                  ]
      }
  ]
}

cheet('i n v i e', () => {
  store.dispatch({
    type:'UPDATE_PROPS',
    props: easter
  })
})

cheet('g o b a c k', () => {
  store.dispatch({
    type:'UPDATE_PROPS',
    props: initialState
  })
})

ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
