'use strict'

import defaults from 'defaults'
import setupDatabase from './lib/db'
import setupAgentModel from './models/agent'
import setupMetricModel from './models/metric'

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  // un agente tiene muchas metricas
  AgentModel.hasMany(MetricModel)
  // una metrica pertenece a un agente
  MetricModel.belongsTo(AgentModel)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true }) // crear base de datos, si existe, borra y crea nueva
  }
  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}

// declaramos la funcion como asincrona para que cada vez que sea
// ejecutada ella retorne una promesa que al ser resuelta se retornan
// los valores de Agent u Metric.

// hasMany y belongsTo son funciones de sequelize
