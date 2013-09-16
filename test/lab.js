var url = "http://localhost:3000/";

var Express = require('express');
var Zombie = require('zombie');
var Patient_zero = require('../lib/patient_zero');
require('chai').should();

var express, brains;

describe('Zombie', function() {
  it('should follow a link and harvest the contents', function(done) {
    express = Express();
    brains = express.get('/', function(req, res){
        res.send('here be brains');
        brains.close();
        done();
    }).listen(3000);
    Patient_zero.crawl(url);
  });
});

