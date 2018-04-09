'use strict'

import Sequelize from 'sequelize'
import setupDataBase from '../lib/db'

module.exports = function setupMetricModel (config) {
  const sequelize = setupDataBase(config)
  return sequelize.define('metric', {
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    value: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
