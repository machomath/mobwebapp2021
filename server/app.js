const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public"))); //to define the static path
app.set("view engine", "ejs");


app.use("/about", (req, res, next)=>{
    res.render("about.ejs", {title: "About Us", page: "about"});
});

app.use("/me", (req, res, next)=>{
    res.render("me.ejs", {title: "My Personal Page", page: "me"});
});

app.use("/contact", (req, res, next)=>{
    res.render("contact.ejs",{title: "Contact Us", page: "contact"});
});

app.use("/", (req, res, next)=>{
    res.render("home.ejs", {title: "Home Page", page: "home"});
});

app.listen(8000, function(){
    console.log("Server is Listening at port 8000");
});

