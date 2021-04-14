const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public"))); //to define the static path
app.set("view engine", "ejs");

app.use("/about", (req, res, next)=>{
    res.render("about.ejs");
});

app.use("/me", (req, res, next)=>{
    res.render("me.ejs");
});

app.use("/contact", (req, res, next)=>{
    res.render("contact.ejs");
});

app.use("/", (req, res, next)=>{
    res.render("home.ejs");
});

app.listen(8000, function(){
    console.log("Server is Listening at port 8000");
});

