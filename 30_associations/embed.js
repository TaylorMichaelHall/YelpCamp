var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");


//post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

var Post = mongoose.model("Post", postSchema);


// user - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "carlos@brown.edu",
//     name: "Carlos Brown"
// });

// newUser.posts.push({
//     title: "How to be carlos.",
//     content: "Just be carlos!"
// });


// newUser.save(function(err,user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name:"Carlos Brown"}, function(err,user){
    if(err){
        // console.log(err);
    } else{
        user.posts.push({
            title: "3 things I don't like",
            content: "Chapo Trap Horse"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});