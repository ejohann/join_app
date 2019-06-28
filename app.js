var express = require('express');
var app = express();


app.get("/", function(req, res){
	res.send("You have reached our homepage!");
});

app.get("/joke", function(req, res){
    var joke = "I know a guy with a wooden leg named smith.  What is the name of his other leg?";
  	res.send(joke);
});

app.listen(8080, function(){
	console.log("Server running on 8080!");
});