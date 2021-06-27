const express = require('express');
const userRoutes = express.Router();

userRoutes.get("/login", (req, res)=>{
    res.send("This is Login Page");
})

userRoutes.get("/register", (req, res)=>{
    res.send("This is Register Page");
})

module.exports = userRoutes;