var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var config = require('./config.js');
var connection = mysql.createConnection(config.databaseOptions);


app.get("/", function(req, res){
	// Get count of users in database
	var q = "SELECT COUNT(*) AS count FROM users";
	connection.query(q, function(error, results){
		if(error)
			{
				throw error;
			}
		  else
		   {
		      	var users = results[0].count;
		      	  //respond with the users count
	           // res.send("We have " + users + " users in our DB");
	           res.render("home", {users: users});
		   }
	});
   // connection.end();
});


app.post("/register", function(req, res){
	var user_email = req.body.email;

	var person ={
        email: user_email
	};

	var end_result = connection.query('INSERT INTO users SET ?', person, function(error, results){
		if(error)
		 {
		 	throw error;
		 }
		 else
		 {
		 	res.redirect("/");
		 }
	});
  // console.log("Post request to register a user.  The email is " + email);
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