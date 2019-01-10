'use strict'

const debug = require('debug')('verse:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const db = require('./')

const prompt = inquirer.createPromptModule()

async function setup () {
  const answer = await prompt([
    {
      type: 'confirm',
      name: 'setup',
      message: 'This will destroy your database, are you sure?'
    }
  ])

  if (!answer.setup) return console.log('Nothing happened :)')

  const config = {
    database: process.env.DB_NAME || 'verse',
    username: process.env.DB_USER || 'platzi',
    password: process.env.DB_PASS || 'platzi',
    host: process.env.DB_HOTS || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
    // operatorsAliases: false
  }

  await db(config).catch(handleFatalError)
  console.log('success')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[Fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
