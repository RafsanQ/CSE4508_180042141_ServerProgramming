const express = require('express');
const app = express();
const userRoutes = require('./Routes/userRoutes.routes.js');

//static folder
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(userRoutes)

const logger = (req, res, nxt)=>{
    const method = req.method;
    const url = req.url;
    const date = new Date().getDate().toString();
    console.log(method, url, date);
    nxt();
}

app.use(logger)
app.get("/", (req, res)=>{
    // res.send("<H1>Home Page</H1><a href='/register'>Register Page</a>\n<a href='/login'>Login Page</a>");
    res.render("dashboard.ejs");
})

app.get("/about", (req, res)=>{
    res.json({Name: "John", Age: "41", Profession: "None"})
})

app.use((req,res)=>{
    res.status(401).send("Page does not exist");
})

module.exports = app;