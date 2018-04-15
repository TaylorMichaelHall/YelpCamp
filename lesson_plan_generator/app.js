var express         = require ("express"),
    mongoose        = require("mongoose"),
    app             = express(),
    bodyParser      = require("body-parser");
    
mongoose.connect("mongodb://localhost/lpg_v1");
app.use(bodyParser .urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});