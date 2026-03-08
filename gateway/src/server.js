const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

const documentSocket = require("./sockets/document.socket")

const app = express()

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
  cors: { origin: "*" }
})

io.on("connection", (socket) => {

  console.log("User connected:", socket.id)

  documentSocket(io, socket)

})

server.listen(5000, () => {
  console.log("Gateway running on port 5000")
})