var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
app.use(express.static(__dirname + '/client'))

app.listen(8001, function() {
  console.log('Listening on localhost:8001')
});