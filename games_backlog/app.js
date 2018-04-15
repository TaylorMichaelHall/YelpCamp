var methodOverride  = require("method-override"),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    express         = require("express"),
    moment          = require('moment'),
    app             =express();
    
//APP CONFIG
mongoose.connect("mongodb://localhost/pokemon_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//mongoose model config
var gameSchema = new mongoose.Schema({
    gameName: String,
    genreOne: String,
    genreTwo: String,
    image: String,
    platform: String,
    nowPlaying: Boolean,
    beatTheGame: Boolean,
    hoursPlayed: Number,
    dateStarted: { type: Date, default: Date.now },
    dateCompleted:  { type: Date, default: Date.now },
    dateLastPlayed:  { type: Date, default: Date.now },
    completionPercent: Number,
    rating: Number,
    notes: String,
    comments: String
});

var GamesList = mongoose.model("GamesList", gameSchema);

//RESTful routes

//index
app.get("/", function(req, res){
    res.redirect("/games");
});

app.get("/games", function(req,res){
    GamesList.find({}, function(err, game){
        if(err){
            console.log("ERROR in games index route");
        } else {
            res.render("index", {game: game});
        }
    });
});

//now playing list

//EXTRAS TO DO AFTER WORKING MODEL
//up next list
//console list
//stats
//completed games

//new
app.get("/games/new", function(req,res){
    res.render("new");
});

//create
app.post("/games", function(req, res){
    GamesList.create(req.body.games, function(err, newGame){
        if(err){
            res.render("new");
        } else {
            res.redirect("/games");
        }
    });
});

//show
app.get("/games/:id", function(req,res){
    GamesList.findById(req.params.id, function(err, foundGame){
        if(err){
            res.redirect("/games");
        } else {
            res.render("show", {game: foundGame});
        }
    });
});

//edit
app.get("/games/:id/edit", function(req, res){
    GamesList.findById(req.params.id, function(err, foundGame){
        if(err){
            res.redirect("/games");
        } else {
            res.render("edit", {game: foundGame});
        }
    });
});
//update
app.put("/games/:id", function(req, res){
    GamesList.findByIdAndUpdate(req.params.id, req.body.game, function(err, updatedGame){
        if(err){
            res.redirect("/games");
        } else {
            res.redirect("/games/" + req.params.id);
        }
    });
});
//delete
app.delete("/games/:id", function(req, res){
    GamesList.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/games");
        } else {
            res.redirect("/games");
        }
    });
});

//listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!")
})