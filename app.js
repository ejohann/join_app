var express = require('express');
var app = express();


app.get("/", function(req, res){
	res.send("You have reached our homepage!");
});

app.listen(8080, function(){
	console.log("Server running on 8080!");
});