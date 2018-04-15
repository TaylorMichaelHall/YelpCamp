var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
        name: "Cloud's rest",
        image: "https://i.imgur.com/S99GM5u.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet t-bone meatball brisket, ham ham hock fatback filet mignon drumstick cow pork tri-tip ribeye pancetta cupim. Pig buffalo pork belly corned beef, short ribs rump spare ribs chicken pork alcatra fatback turkey strip steak jerky burgdoggen. Beef pork belly turducken salami spare ribs, tail chuck hamburger. Pork porchetta chuck shoulder pork loin leberkas flank sausage short ribs chicken ground round brisket. Doner tenderloin ham capicola. Boudin ball tip bresaola shank jowl turkey sirloin short ribs pastrami t-bone corned beef."
    },
        {
        name: "Big Boy",
        image: "https://i.imgur.com/w4qKUj4.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet t-bone meatball brisket, ham ham hock fatback filet mignon drumstick cow pork tri-tip ribeye pancetta cupim. Pig buffalo pork belly corned beef, short ribs rump spare ribs chicken pork alcatra fatback turkey strip steak jerky burgdoggen. Beef pork belly turducken salami spare ribs, tail chuck hamburger. Pork porchetta chuck shoulder pork loin leberkas flank sausage short ribs chicken ground round brisket. Doner tenderloin ham capicola. Boudin ball tip bresaola shank jowl turkey sirloin short ribs pastrami t-bone corned beef."
    },        {
        name: "My good friend Pete",
        image: "https://i.imgur.com/h6y6QDU.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet t-bone meatball brisket, ham ham hock fatback filet mignon drumstick cow pork tri-tip ribeye pancetta cupim. Pig buffalo pork belly corned beef, short ribs rump spare ribs chicken pork alcatra fatback turkey strip steak jerky burgdoggen. Beef pork belly turducken salami spare ribs, tail chuck hamburger. Pork porchetta chuck shoulder pork loin leberkas flank sausage short ribs chicken ground round brisket. Doner tenderloin ham capicola. Boudin ball tip bresaola shank jowl turkey sirloin short ribs pastrami t-bone corned beef."
    },
        {
        name: "Little guy",
        image: "https://i.imgur.com/ENu1xV5.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet t-bone meatball brisket, ham ham hock fatback filet mignon drumstick cow pork tri-tip ribeye pancetta cupim. Pig buffalo pork belly corned beef, short ribs rump spare ribs chicken pork alcatra fatback turkey strip steak jerky burgdoggen. Beef pork belly turducken salami spare ribs, tail chuck hamburger. Pork porchetta chuck shoulder pork loin leberkas flank sausage short ribs chicken ground round brisket. Doner tenderloin ham capicola. Boudin ball tip bresaola shank jowl turkey sirloin short ribs pastrami t-bone corned beef."
    }
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
                    console.log("Added a campground");
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