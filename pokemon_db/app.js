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

//MONGOOSE/MODEL config
var pokemonSchema = new mongoose.Schema({
    pokemonName: String,
    typeOne: String,
    typeTwo: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Pokemon = mongoose.model("Pokemon", pokemonSchema);

//RESTFUL Routes
//index
app.get("/", function(req, res){
    res.redirect("/pokemon");
});

app.get("/pokemon", function(req, res){
    Pokemon.find({}, function(err, pokemon){
        if(err){
            console.log("ERROR!");
        } else {
            res.render("index", {pokemon: pokemon});
        }
    });
});

//new

app.get("/pokemon/new", function(req, res){
    res.render("new");
});

//create
app.post("/pokemon", function(req, res){
    Pokemon.create(req.body.pokemon, function(err, newPokemon){
        if(err){
            res.render("new");
        } else {
            res.redirect("/pokemon");
        }
    });
});

//show
app.get("/pokemon/:id", function(req, res){
    Pokemon.findById(req.params.id, function(err, foundPokemon){
        if(err){
            res.redirect("/pokemon");
        } else {
            res.render("show", {pokemon: foundPokemon});
        }
    });
});

//edit
app.get("/pokemon/:id/edit", function(req, res){
    Pokemon.findById(req.params.id, function(err, foundPokemon){
        if(err){
            res.redirect("/pokemon");
        } else {
            res.render("edit", {pokemon: foundPokemon});
        }
    });
});

//update
app.put("/pokemon/:id", function(req, res){
    Pokemon.findByIdAndUpdate(req.params.id, req.body.pokemon, function(err, updatedPokemon){
        if(err){
            res.redirect("/pokemon");
        } else {
            res.redirect("/pokemon/" + req.params.id);
        }
    });
});
//delete
app.delete("/pokemon/:id", function(req, res){
    Pokemon.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/pokemon");
        } else {
            res.redirect("/pokemon");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!")
})