var express = require('express');
var http=require('http');
var app = express();
var querystring = require('querystring');
var bodyParser = require('body-parser');
/*
// respond with "hello world" when a GET request is made to the homepage*/
app.use(bodyParser.json());


app.get('/home', function(req,res){
 res.sendfile(__dirname + '/public/index.html');
});



app.use(express.static("./public"));
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});