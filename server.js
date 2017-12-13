var express = require("express");
var parser = require("body-parser")
var app = express();
var path = require("path");

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static("client/build"));

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/games", function(err,client){
	if(err){
		console.log(err);
	};

	db = client.db('games');

	console.log("Connected to Database");

	app.listen(3000, function(){
		console.log("Listening on Port 3000");
	});

});

app.get("/", function(req, res){
	res.sendFile(__dirname + "/client/build/index.html");
});

app.get("/games", function(req, res){
	db.collection("favourite_games").find().toArray(function(err, results){
		if(err){
			console.log(err);
		}

		res.json(results);
	});
});

app.post("/games", function(req, res){

    //brings back a specific collection
    db.collection("favourite_games").save(req.body, function(err, result){
        if(err){
            return console.log(err);
        }

        console.log("Saved to database.");
        //redirect to home
        res.redirect("/");
    });
});

app.post("/games/delete-all", function(req, res){
	console.log(db.collection("favourite_games"));
    db.collection("favourite_games").remove();
    res.redirect("/");
});
