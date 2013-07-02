#!/usr/bin/node
var server = require("./server");
var router = require("./router");
var router = require("./admin");

server.start(router.route);
