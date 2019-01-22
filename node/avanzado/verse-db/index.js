'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')
const setupAgent = require('./lib/agent')
const defaults = require('defaults')

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

  // Relación entre agentes y métricas
  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)

  // Validamos conección a la base de datos
  await sequelize.authenticate()

  // Configuración de la base de datos
  if (config.setup) {
    // force: true,   si la base de datos existe, borrar y crear nueva
    await sequelize.sync({ force: true })
  }

  const Agent = setupAgent(AgentModel)
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
