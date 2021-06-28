const express = require('express');
const userRoutes = express.Router();
const bodyParser = require('body-parser')

userRoutes.use(bodyParser.urlencoded({extended: false}))
userRoutes.use(bodyParser.json())

userRoutes.get("/login", (req, res)=>{
    res.sendFile("loginPage.html", {root:"./views/users/"});
})

userRoutes.get("/dashboard/:id/:username", (req, res)=>{
    const id = req.params.id, username = req.params.username;

    res.send(`dash board page id = ${id} username= ${username}`);
})

userRoutes.get("/register", (req, res)=>{
    res.sendFile("registerPage.html", {root: "./views/users/"});    
})

userRoutes.post("/register", (req,res)=>{
    const email = req.body.email;
    res.send(`<H2>user with email ${email} want to register</H2>`);
})

module.exports = userRoutes;