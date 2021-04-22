/* 
 * Code by DeviatorsLegacy
 * Github: https://github.com/deviatorslegacy/
 */


/* Imports */

import path from 'path'
import http from 'http'

import express from 'express'
import socketio from 'socket.io'


/* Initialization */

const app: express.Application = express()
const server: http.Server = http.createServer(app)
const io: socketio.Server = require('socket.io')(server, {})


/* Routing */

// Set up view engine (ejs)
app.set('view engine', 'ejs')

// Access public directory contents from root
app.use('/', express.static(path.join(process.cwd(), '/public')))

// Serve index.ejs file
app.get('/', (_, response) => response.render('index'))

/* Manage websockets */

// On connection...
io.sockets.on('connection', (socket: socketio.Socket) => {

    // Log socket information
    console.log(`Connection established: ${socket.id}`)

    // Send 'Hello, World!' message to client
    socket.emit('msg', 'HELLO, WORLD!');

    // Log socket information on disconnect
    socket.on('disconnect', () => {
        console.log(`Connection lost: ${socket.id}`)
    })

})


/* Configure server */

// Find port in .env file or use default (port 3000)
const PORT = process.env.PORT || 3000

// Listen to selected port
server.listen(PORT, () => console.log(`Listening on localhost:${PORT}/`))

