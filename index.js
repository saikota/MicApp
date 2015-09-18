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

app.get('/vsearch', function(req,res){
 res.sendfile(__dirname + '/public/vsearch.html');
});

app.post('/sbtVisualSearch', function(req, res) {
	
	var urlObjs={"msg":"Hello World"}
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	var searchPhrase=req.body.searchphrase;
	var searchBrandName=req.body.brands;
	console.log(" sending values"+searchPhrase+" ,"+searchBrandName);
	var tmpObj,searchGetProductUrl = "http://localhost:8080/SpringRestExample/rest/search?searchPhrase="+searchPhrase+"&brand="+searchBrandName;
    console.log("post data is",req.body);
   callback = function(response) {
      var str = '';
  //another chunk of data has been recieved, so append it to `str`
     response.on('data', function (chunk) {
	    console.log(str);
        str += chunk;
     });
  //the whole response has been recieved, so we just print it out here
     response.on('end', function () {
	    console.log(str);
        tmpObj=str;
	    res.send({msg:str});
    });
   }
http.request(searchGetProductUrl, callback).end();
/*res.send(urlObjs);*/
 
	
});

app.use(express.static("./public"));
  var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});