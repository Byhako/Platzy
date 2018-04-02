'use strict'

// import setupDatabase from './lib/db'
const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  // un agente tiene muchas metricas
  AgentModel.hasMany(MetricModel)
  // una metrica pertenece a un agente
  MetricModel.belongsTo(AgentModel)

  await sequelize.authenticate()

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
