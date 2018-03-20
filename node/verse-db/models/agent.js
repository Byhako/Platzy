'use strict'

import Sequelize from 'sequelize'
import setupDataBase from '../lib/db'

module.exports = function setupAgentModel (config) {
  const sequelize = setupDataBase(config)
  // sequelize.define(nombre, propiedades)
  return sequelize.define('agente', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false  // es requerido. no dato nulo
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hostname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    pid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    connected: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
