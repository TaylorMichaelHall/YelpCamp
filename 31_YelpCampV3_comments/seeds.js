var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
        name: "Cloud's rest",
        image: "https://i.imgur.com/S99GM5u.jpg",
        description: "blah blah blah"
    },
        {
        name: "Big Boy",
        image: "https://i.imgur.com/w4qKUj4.jpg",
        description: "blah blah blah"
    },
        {
        name: "Little guy",
        image: "https://i.imgur.com/ENu1xV5.jpg",
        description: "blah blah blah"
    },
]


function seedDB(){
    //Remove all campgrounds
  Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
      //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great but no internet",
                            author: "Homer"
                        } , function(err,comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment")
                            }
                        });                    
                }
            });
        });
    });  
}

module.exports = seedDB;