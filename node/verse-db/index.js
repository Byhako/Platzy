'use strict'

module.exports = async function (config) {
  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}

// declaramos la funcion como asincrona para que cada vez que sea
// ejecutada ella retorne una promesaque al ser resuelta se retornan
// los valores de Agent u Metric.
