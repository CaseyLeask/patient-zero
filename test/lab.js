var Express = require('express');
var Zombie = require('zombie');
require('chai').should();

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
      zombie.html().indexOf('brains').should.be.above(-1);
      done();
    });
  });

  after(function() {
    brains.close();
  });
});

