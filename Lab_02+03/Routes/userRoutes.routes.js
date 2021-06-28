const express = require('express');
const userRoutes = express.Router();

userRoutes.get("/login", (req, res)=>{
    res.send("This is Login Page");
})

userRoutes.get("/register", (req, res)=>{
    res.sendFile("registerPage.html", {root: "./views/users/"});    
})

module.exports = userRoutes;