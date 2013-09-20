var url = "http://localhost:3000/";

var Express = require('express');
var Zombie = require('zombie');
var Patient_zero = require('../lib/patient_zero');
require('chai').should();

var express, brains;

describe('Patient Zero', function() {
  it('should follow a link and harvest the contents', function(done) {
    room = Express();
    room.get('/', function(req, res) {
        res.send('<a href="/brains">here be brains</a>');
    });
    room.get('/brains', function(req, res) {
        res.send('white/grey matter');
        done();
    });
    room.listen(3000);
    Patient_zero.crawl(url);
  });
});

