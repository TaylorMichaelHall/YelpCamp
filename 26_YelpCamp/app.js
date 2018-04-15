var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser .urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://grist.files.wordpress.com/2017/05/tent-campsite-by-river.jpg?w=1024&h=576&crop=1"},
        {name: "Granite Hill", image: "http://dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg"},
        {name: "Mountain Goat's Rest", image: "http://i.telegraph.co.uk/multimedia/archive/01439/camp-family_1439761c.jpg"}
    ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){ //same url as my get route for campgrounds, this one is a post route though || research REST convention
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!")
});