const express = require("express");
const bodyParser = require("body-parser");
var app = express();

app.use(express.urlencoded({extended: true}));

//setting view engine for ejs
app.set("view engine", "ejs");

//add static files like styling css files
app.use(express.static('public'));



// var example = "working";
var items = [];

app.get("/", function(req, res){
    res.render("todo", {ejes : items})
})

app.post("/", function(req,res){
   var item = req.body.todo;
   items.push(item);
   res.redirect("/")
})

app.listen(3000, function(){
    console.log("server started");
})