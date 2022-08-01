const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000
const path =require('path');
const modules = require('./modules/index.js');
const cors = require('cors')
const http = require('http')
const socketIo = require('socket.io')

let server = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './modules/posts/postsImgs')))
app.use(express.static("*"));
app.use(express.static(path.join(__dirname, './modules/admin/avatars')))

app.use(modules)

server.listen(PORT, () => console.log(`Server is runing on ${PORT} port`))
