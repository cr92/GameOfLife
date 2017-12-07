'use strict';
require('dotenv').config();

const PORT = process.env.PORT || 'localhost';
const HOST = process.env.HOST || 3000;

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const app = express();

app.use(express.static(__dirname));
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

const http_server = http.createServer(app);

var io = socketio(http_server);

io.on('connection', function () {
    io.emit('grid', {
        grid: [
            [1, 0],
            [0, 0]
        ]
    });
});

setInterval(function () {
    io.emit('grid', {
        grid: [
            [1, 0],
            [0, 0]
        ]
    });
}, process.env.REFRESH_INTERVAL);

http_server.listen(PORT, () => {
    console.log(`@ ${HOST}:${PORT}`);
});