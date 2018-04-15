var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser .urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(        
//     {
//         name: "Granite Hill", 
//         image: "http://dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg",
//         description: "This is a huge granite hill, no bathrooms, no water. Beautiful granite!"

//     }, 
//     function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly created campground: ")
//             console.log(campground);
//         }
//     });

var campgrounds = [
        {name: "Salmon Creek", image: "https://grist.files.wordpress.com/2017/05/tent-campsite-by-river.jpg?w=1024&h=576&crop=1"},
        {name: "Granite Hill", image: "http://dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg"},
        {name: "Mountain Goat's Rest", image: "httpno://i.telegraph.co.uk/multimedia/archive/01439/camp-family_1439761c.jpg"}
    ];

app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    //get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds:allCampgrounds});
        }
    });
});

//CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){ //same url as my get route for campgrounds, this one is a post route though || research REST convention
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");    
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           console.log(err);
       } else {
           //render show template with that campground
           res.render("show", {campground: foundCampground});
       }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});