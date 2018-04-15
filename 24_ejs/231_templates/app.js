var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home"); //embeded java script
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing}); //this passes thing as thingVar variable to love.ejs
});

app.get("/posts", function(req, res){
   var posts = [
       {title: "Post 1", author: "Susy"},
       {title: "My pet bunny", author: "Charlie"},
       {title: "Can you believe this pomsky?", author: "Colt"},
       ];
       
       res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!");
});
