'use strict'

const { app, BrowserWindow } = require('electron')

app.on('before-quit', () => {
  console.log('saliendo...')
})

app.on('ready', () => {
  let win = new BrowserWindow()

  win.on('close', () => {
    win = null
    app.quit()
  })
})

