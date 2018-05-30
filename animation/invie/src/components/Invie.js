import React, { Component } from 'react'

import Portada from './Portada'
import Guitarras from './Guitarras'
import Footer from './Footer'

import '../css/invie.css'

class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada />
        <Guitarras />
        <Footer />
      </section>
    );
  }
}

export default Invie
