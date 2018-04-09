'use strict'

const debug = require('debug')('verse-db:db::setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const db = require('./index')

const prompt = inquirer.createPromptModule()

async function setup () {
  const answer = await prompt([
    {
      type: 'confirm', // yes/not
      name: 'setup',
      message: 'This will destroy your database, are you sure?'
    }
  ])

  if (!answer.setup) {
    return console.log('Nothing Happended!')
  }

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
  console.error(`${chalk.red('[Fatal Error]')} ${err.message}`)
  console.error(err.stack) // type of error
  process.exit(1) // kill process
}

setup()


// Las preguntas que hacemos con inquirer son promesas. Cuando el usuario
// responda, la promesa se resuelve y obtenemos un valor.
//
// console.error(`${chalk.red('[Fatal Error]')} ${err.message}`)
// Colorea de rojo [Fatal Error] al imprimirlo por consola.