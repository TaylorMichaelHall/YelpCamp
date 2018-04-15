#RESTful Routing

##Intro
*What is REST?
    *The routes for doing interactive web stuff. Need a route for posting, editing, deleting, etc
    *REST is a archetecture for HTTP routes to do CRUD (create read update destroy)
*List all 7 RESTful routes*Show example of RESTful routing in practice
Table:
========================================================================
NAME        PATH                HTTP Verb       Purpose
Index       /dogs/              GET             List all dogs
New         /dogs/new           GET             Show new dog form
Create      /dogs/              POST            Create a new dog, then redirect somewhere (where the new form submits)
Show        /dogs/:id           GET             Show info about one specific dog
Edit        /dogs/:id/edit      GET             Show edit form for one dog
Update      /dogs/:id           PUT             Update a dog, then redirect somewhere
Destroy     /dogs/:id           DELETE          Delete a particular dog, then redirect somewhere



REST - A mapping between HTTP routes and CRUD
BLOG routes
CREATE
READ /allBlogs/
UPDATE /updateBlog/:id
DESTROY /deleteBlog/:id

CRUD actions use the seven routes above, some actions need multiple routes (example, new makes a form to create a new thing, then post adds that new data to the DB)

#Blog Index (Lecture 263)
*Setup the Blog App
*Create the Blog model
*Add INDEX route and template
*Add Simple Nav Bar

#Basic Layout (Lecture 264)
*Add header and footer partials
*include semantic UI
*Add Simple Nav

#Resume Lecture 266 (there is a preceding note ~265)
*Add NEW route to add new post
*Add NEW template
*Add CREATE route
*Add CREATE template

#Show (267)
*Add SHOW route
*Add SHOW template
*Add links to show page
*Style show template

#Edit/Update (268)
*Add edit route
*Add edit form
*Add update route
*Add update form
*Add Method-Override to support 'put' in html form

#Destroy (269)
*add delete route

#Sanitize and Styling (270?)
*Sanitize blog body
*Style Index
*Update REST table