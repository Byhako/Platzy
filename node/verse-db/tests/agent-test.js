'use strict'

import test from 'ava'
import proxyquire from 'proxyquire'
import sinon from 'sinon'

let config = {
  logging: function () {}
}

let MetricStub = {
  belongsTo: sinon.spy()
}

let AgentStub = null
let db = null
let sandbox = null

test.beforeEach(async () => {
  sandbox = sinon.sandbox.create()
  AgentStub = {
    hasMany: sandbox.spy()
  }

  const setupDatabase = proxyquire('../', {
    './models/agent': () => AgentStub,
    './models/metric': () => MetricStub
  })
  db = await setupDatabase(config)
})

test.afterEach(() => {
  sandbox && sinon.sandbox.restore()
})

test('Agent', t => {
  t.truthy(db.Agent, 'Agent service should exit')
})

test.serial('Setup', async t => {
  t.true(AgentStub.hasMany.called, 'AgentModel.hasMany was execute'),
  t.true(AgentStub.hasMany.calledWith(MetricStub), 'Argument should be the MetricModel'),
  t.true(MetricStub.belongsTo.called, 'MetricStub.belongsTo was execute')
  t.true(MetricStub.belongsTo.calledWith(AgentStub), 'Argument should be the AgenModel')
})

// test('make it pass', t => {
//   t.pass()
// })
