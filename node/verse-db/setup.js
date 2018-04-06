'use strict'

const debug = require('debug')('verse-db:db::setup')
const db = require('./index')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'verse',
    username: process.env.DB_USER || 'platzi',
    password: process.env.DB_PASSWORD || 'platzi',
    host: process.env.DB_HOTS || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack) // type of error
  process.exit(1) // kill process
}

setup()
