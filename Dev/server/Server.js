'use strict';

var express = require('express');
var open = require('open');
var net = require('net');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var compression = require('compression');
var serveIndex = require('serve-index');
var app = express();
var router = express.Router();

var config = {
  serverPort: 8999,
  directory: 'Dist'
};

var Server = {
  init: function () {
    this.setup();
    this.findFreePort();
  },
  setup: function () {
    router.use(compression());
    router.use(methodOverride('X-HTTP-Method-Override'));
    router.use(bodyParser.urlencoded({
      extended: false
    }));
    router.use(bodyParser.json());
    router.use('/_index', serveIndex(config.directory));
    router.use(require('connect-livereload')());
    router.use(express.static(config.directory));
    app.use(router);
  },
  getPortNumber: function () {
    return config.serverPort += 100;
  },
  findFreePort: function () {
    var server = net.createServer(function (socket) {
      socket.write('Echo server\r\n');
      socket.pipe(socket);
    });

    server.listen(this.getPortNumber());
    server.on('error', function (e) {
      console.log(e);
      Server.findFreePort();
    });
    server.on('listening', function (e) {
      server.close();
      Server.start();
    });
  },
  start: function () {
    app.listen(config.serverPort);
    console.log('server listening at %s', config.serverPort);

    // allow disabling automatic browser opening
    process.env.NO_OPEN ? null : open('http://localhost:' + config.serverPort);
  }
};

Server.init();
