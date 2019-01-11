'use strict'

const agent = {
  id: 1,
  uuid: 'yyy-yyy-yyy',
  name: 'fixture',
  username: 'toto',
  hots: 'test-host',
  pid: 0,
  connected: true,
  createAt: new Date(),
  updateAt: new Date()
}

const agents = [
  agent,
  extend(agent, { id: 2, uuid: 'xxx-xxx-xxx', connected: false, username: 'test' }),
  extend(agent, { id: 3, uuid: 'www-www-www' }),
  extend(agent, { id: 4, uuid: 'aaa-aaa-www' })
]

function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: agent,
  all: agents,
  connected: agents.filter(a => a.connected),
  toto: agents.filter(a => a.username === 'toto'),
  byUuid: id => agents.filter(a => a.uuid === id).shift(),
  byId: id => agents.filter(a => a.id === id).shift()
}
