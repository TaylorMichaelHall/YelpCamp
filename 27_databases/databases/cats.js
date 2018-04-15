var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB
//this part adds cats to the db so it's commented out so we aren't always adding more cats

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!");
//     } else {
//         console.log("We just saved a cat to the DB!");
//         console.log(cat);
//     }
// });

//another, simpler create method

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no! Error");
        console.log(err);
    } else {
        console.log("all the cats:");
        console.log(cats);
    }
})