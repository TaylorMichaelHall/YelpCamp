--restart mongo with $ ./mongod in the root cd

#Databases

##Intro to Databases
* What is a database?
*   A collection of information/data 
*   has an interface - can write code to interact with it

*SQL(relational) vs. NoSQL(non-relational)
*SQL db's have been around the longest, most common

###SQL
*example

USERS TABLE
id | name | age | city
-----------------------
1  | Tim  | 57  | NYC
2  | Ira  | 24  | Missoula
3  | Sue  | 40  | Boulder

COMMENTS TABLE

id |       text
-------------------------------------
1  | "lol"
2  | "Come visit montana!"
3  | "I love puppies!!!"
4  | "Seriously Montana is great!"

//the only way to associate a user to a comment in SQL is to have another table

USER/COMMNETS JOIN TABLE
userID   |    commentID
------------------------------------
    1    |      3
    2    |      2
    2    |      4
    3    |      1
    
    
* Takeaway: SQL is tabular (have to define a table) and inflexible. You have to define exact patterns for data and follow the patterns


###NOSQL
*Example

======================================
A NON-RELATIONAL DATABASE:
======================================
{
    name: "Ira",
    age: 24,
    city: Missoula,
    comments: [
        {text: "Come visit Montana!"},
        {text: "Seriously Montana is great!"}
    ],
    favColor: "purple"
}
{
    name: "Tammy",
    age: 24,
    city: Missoula,
    comments: [
        {text: "Come visit Montana!"},
        {text: "Seriously Montana is great!"}
    ],
    favFood: "ribeye"
}

//looks like Javascript, it's BSON


//SQL databases are actually usually better in most situations. Don't mistake flexibility for utility

#Intro to MongoDB
* What is MongoDB?
*   a NOSQL database
*Why use MongoDB?
*   It's the most popular database for node/express
*   MEAN stack (mongo express angular node)
*Installation
--some things have changed since colt's video. I need to shut down mongo in the terminal each time I finish working or there will be a timeout error
--restart mongo with $ ./mongod in the root cd

#Our First Mongo Commands
* mongod
* mongohelp
* show dbs
* use
* insert
* find
* update
* remove

##CRUD
create read update destroy
insert find update remove <<mongos crud commands

#Mongoose
*What is mongoose?
    *Mongo object modeling for node js
    *A tool that helps us interact with mongodb inside our javascript files. We can do everything without mongoose, but this makes it easier and cleaner
    