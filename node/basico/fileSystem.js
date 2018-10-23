const fs = require('fs')

fs.readFile('./numeros.txt', 'utf8', (err, text) => {
  if (err) throw err
  const numeros = text.split('\n').map(n => Number(n))
  
  fs.writeFile('./newFile', numeros.join('\n'), (err, result) => {
    if (err) throw err
  })
})

