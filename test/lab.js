var Express = require('express');
var express = Express();
var brains = express.get('/', function(req, res){
    res.send('hello world');
    brains.close();
}).listen(3000);
var Zombie = require("zombie");
var Assert = require("assert");

Zombie.visit("http://localhost:3000/", function (e, zombie) {
  console.log(zombie.html());
});
