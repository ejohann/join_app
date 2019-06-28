var express = require('express');
var app = express();
var mysql = require('mysql');

var config = require('./config.js');
var connection = mysql.createConnection(config.databaseOptions);


app.get("/", function(req, res){
	res.send("You have reached our homepage!");
});

app.get("/joke", function(req, res){
    var joke = "I know a guy with a wooden leg named smith.  What is the name of his other leg?";
  	res.send(joke);
});

app.get("/random_number", function(req, res){
    var x = Math.floor(Math.random() * 10 + 1);
  	res.send("Your lucky number is: " + x);
});

app.listen(8080, function(){
	console.log("Server running on 8080!");
});