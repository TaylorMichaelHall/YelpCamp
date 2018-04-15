var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
   res.send("Hi there!");
});

// "/bye" ==> "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" ==> "Meow!"
app.get("/dog", function(req, res){
    res.send("Meow!");
});

// route parameters
// you don't want to make an app.get for every single post on reddit, for example, or even every single subreddit
// so do it like this app.get("/r/:subredditName")
// this tells express the pattern to understand what to do with routes that match the pattern
app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBBREDDIT!");
});

app.get("/r/:subbreditName/comments/:id/:title/", function(req, res){
    res.send("Welcome to the comments page!");
});

// catch-all route for undefined routes
app.get("*", function(req, res){
    res.send("You are a star!");
});
// order of routes matters, the first route that matches the request is the one that will be run
// routes are first come, first served, so to speak

// listen command, this is kind of boilerplate
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!")
});