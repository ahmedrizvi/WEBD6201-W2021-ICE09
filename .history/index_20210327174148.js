#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let app = require('./app');
const debug = require('debug')('week10b:server');
const http = require("http");
let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);