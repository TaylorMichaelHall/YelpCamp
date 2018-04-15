var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you, human",
        goldfish: "..."
    }
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'.");
  
    // my way was to use a switch. This worked but isn't DRY I guess
    //BUT mine does have a case for undefined
    // switch(animal) {
    //     case "pig":
    //     res.send("The pig says 'oink'");
    //         break;
    //     case "cow":
    //     res.send("The cow says 'moo'");
    //         break;    
    //     case "dog":
    //     res.send("The dog says 'Woof woof!'");
    //         break;        
    //     case "cat":
    //     res.send("The cat says 'Meow!'");
    //         break;
    //     case "hedgehog":
    //     res.send("The hedgehog says 'Gotta go fast!'");
    //         break;
    //     default:
    //     res.send("That animal doesn't speak!'");
    // }
});

// my logic was exactly what colt made ^_^ with different variables
app.get("/repeat/:word/:number", function(req, res){
    var word = req.params.word;
    var number = parseInt(req.params.number);
    var string ="";
    for(var i = 0; i<number; i++){
        string = string += word + " ";
    }
    res.send(string);
});


app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!")
});