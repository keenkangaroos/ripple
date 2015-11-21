var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.use(express.static(__dirname + '/client'))

apiurl = 'http://youtubeinmp3.com/fetch/?format=JSON&video=http://www.youtube.com';

app.get('/results', function(req, res){
  var search_query = req.param('search_query');
    //url becomes whatever is clicked.youTubeUrl
    var url = 'https://www.youtube.com/results?search_query='+search_query;
    console.log(url)
    request(url, function(error, response, html){
      if(!error){
      //utilize the cheerio library on the returned html allowing jQuery functionality
      var $ = cheerio.load(html);
      //Finally, we'll define the variables we're going to capture
      var youTubeLink;
      $('#results').filter(function(){
        var data = $(this);
        youTubeLink = data.find('ol.item-section').first().find('a').attr('href');
        // console.log(youTubeLink);
      });
      //create api url for retrieving json object containing mp3 link
      var mp3url = apiurl + youTubeLink;

      //get the mp3 url
      request.get(mp3url, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            var locals = JSON.parse(body);
            console.log(body);
            res.send(locals.link);
        }
      });
    }
  });
});


app.listen(8001, function() {
  console.log('Listening on localhost:8001')
});
exports = module.exports = app;