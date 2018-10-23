// permite ejecutar comandos del sistema

const cp = require('child_process')

function command (command) {
  cp.exec(command, (err, stdout, stderr) => {
    if (err) throw err
    if (stdout) console.log(stdout)
    if (stderr) console.log(stderr)
  })
}

command('ls')