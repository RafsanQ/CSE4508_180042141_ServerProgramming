const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("<H1>Home Page</H1>");
})

app.get("/about", (req, res)=>{
    res.json({Name: "John", Age: "41", Profession: "None"})
})

app.use((req,res)=>{
    res.status(401).send("Page does not exist");
})

module.exports = app;