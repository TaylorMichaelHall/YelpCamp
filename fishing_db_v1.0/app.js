var express         = require ("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    FishingSpot     = require ("./models/fishingspot"),
//  Comment         = require("./models/comment"),
//  User            = require("./models/user"),
    seedDB           = require("./seeds");
//CHECK SEMICOLON AND COMMAS WHEN YOU UPDATE COMMENTED ITEMS

mongoose.connect("mongodb://localhost/fishing_db_v1");
app.use(bodyParser .urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

//landing page
app.get("/", function (req, res){
    res.render("landing");
});

//INDEX - show all fishing spots
app.get("/fishingspots", function (req, res){
    //get all fishing spots from DB
    FishingSpot.find({}, function(err, allFishingspots){
        if(err){
            console.log(err);
        } else {
            res.render("fishingspots/index", {fishingSpots: allFishingspots});
        }
    });
});

//create - add a new fishingspot to db
app.post("/fishingspots")





app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});