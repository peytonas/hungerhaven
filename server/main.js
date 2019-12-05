// NOTE this is essentially the main portion of our server
import express from 'express'
import cors from 'cors'
import bp from 'body-parser'
import DbContext from "./db/dbConfig"

const port = process.env.PORT || 3000

//NOTE next we need to create our server

let server = express()
let app = server.listen(port, function () {
  console.log('server running on port 3001');
});
// const io = require('socket.io')(app)

// io.on('connection', function (socket) {
//   socket.on('SEND_BRINGSIDE', function (data) {
//     io.emit('BRINGSIDE', data)
//   })
//   socket.on('SEND_BRINGDRINK', function (data) {
//     io.emit('BRINGDRINK', data)
//   })
//   socket.on('SEND_BRINGDESSERT', function (data) {
//     io.emit('BRINGDESSERT', data)
//   })
//   socket.on('SEND_CHANGEMAINCOURSE', function (data) {
//     io.emit('CHANGEMAINCOURSE', data)
//   })
//   socket.on('SEND_CHANGETIME', function (data) {
//     io.emit('CHANGETIME', data)
//   })
//   socket.on('SEND_CHANGEPLACE', function (data) {
//     io.emit('CHANGEPLACE', data)
//   })
//   socket.on('SEND_REQSIDE', function (data) {
//     io.emit('REQSIDE', data)
//   })
//   socket.on('SEND_REQDRINK', function (data) {
//     io.emit('REQDRINK', data)
//   })
//   socket.on('SEND_REQDESSERT', function (data) {
//     io.emit('REQDESSERT', data)
//   })
//   socket.on('SEND_ADDATTENDEE', function (data) {
//     io.emit('ADDATTENDEE', data)
//   })
//   socket.on('SEND_CHANGESTATUS', function (data) {
//     io.emit('CHANGESTATUS', data)
//   })
// })
// let webSocketServer = require('websocket').server;
// let http = require('http');
// let socketServer = http.createServer(function (request, response) {
//   console.log("hi");
//   response.writeHead(404);
//   response.end();
// });
// server.listen(8080, function () {
//   console.log("server is listening on port 8080")
// });

// let wsServer = new webSocketServer({
//   httpServer: socketServer
// })


// wsServer.on('request', function (request) {
//   let connection = request.accept('echo-protocol', request.origin);
//   console.log("Connection accepted.");
//   connection.on('message', function (message) {
//     console.log('Received Message: ' + message.utf8Data);
//     connection.sendUTF(message.utf8Data)

//   });
//   connection.on('close', function (reasonCode, description) {
//     console.log('Peer ' + connection.remoteAddress + ' disconnected')
//   })

// })
//NOTE Fire up database connection
DbContext.connect()

//NOTE Creates a reference to the build project on the client (if api only remove this line)
server.use(express.static(__dirname + '/../client/dist'))

//NOTE Allows requests from the port 8080, add additional addresses as needed
let whitelist = ['http://localhost:8080', 'https://hungerhaven.herokuapp.com'];
let corsOptions = {
  origin: function (origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))


//NOTE we are giving our server the bodyparser middleware. This middleware gives use the ability to pass information into our server as a request and parse it from JSON back into objects.
server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

//NOTE Everything above this line always stays the same

//NOTE REGISTER YOUR SESSION, OTHERWISE YOU WILL NEVER GET LOGGED IN
import AuthController from './controllers/AuthController'
import Session from "./middleware/session"
server.use(new Session().express)
server.use('/account', new AuthController().router)

//NOTE next we want to register all our routes(doorways that can be accessed in our app)

//NOTE we have to import access to our controllers
import UserController from './controllers/UserController'
import EventController from './controllers/EventController'

//NOTE remember the forward slash at the start of your path!
server.use('/api/user', new UserController().router)
server.use('/api/events', new EventController().router)



//NOTE Everything below this line always stays the same

//NOTE Default error handler, catches all routes with an error attached
server.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 400).send({ error: error.message })
})

//NOTE Catch all to insure to return 404 if recieved a bad route
server.use('*', (req, res, next) => {
  res.status(404).send("Route not found")
})