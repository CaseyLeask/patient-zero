var Express = require('express');
var Zombie = require("zombie");
var Assert = require("assert");
var express, brains;

describe('Zombie', function() {
  before(function() {
    express = Express();
    brains = express.get('/', function(req, res){
        res.send('here be brains');
    }).listen(3000);
  });

  it('should follow a link and harvest the contents', function(done) {
    Zombie.visit("http://localhost:3000/", function (e, zombie) {
      Assert.ok(zombie.html().indexOf('brains') >= 0);
      done();
    });
  });

  after(function() {
    brains.close();
  });
});

