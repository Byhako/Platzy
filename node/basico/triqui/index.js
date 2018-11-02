const server = require('http').Server()
const io = require('socket.io')(server)
const port = require('./config').SERVER_PORT

const banner = `
***************
   Socke IO
***************
`

io.on('connection', (socket) => {
  socket.on('register', (user) => {
    console.log(`User registed: ${user.name}`)
  })
})

server.listen(port, () => {
  console.info(banner)
})
