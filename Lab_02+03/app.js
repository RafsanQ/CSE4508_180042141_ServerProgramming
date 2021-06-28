const express = require('express');
const app = express();
const userRoutes = require('./Routes/userRoutes.routes.js');

app.use(userRoutes)
app.get("/", (req, res)=>{
    res.send("<H1>Home Page</H1><a href='/register'>Register Page</a>\n<a href='/login'>Login Page</a>");
})

app.get("/about", (req, res)=>{
    res.json({Name: "John", Age: "41", Profession: "None"})
})

app.use((req,res)=>{
    res.status(401).send("Page does not exist");
})

module.exports = app;