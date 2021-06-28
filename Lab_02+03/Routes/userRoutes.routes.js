const express = require('express');
const userRoutes = express.Router();
const bodyParser = require('body-parser')
const isLoggedIn = require('./../middlewares/auth.middleware');

const {
    getRegister, 
    postLogin, 
    postRegister, 
    getLogin,
    getDashBoard
} = require("./../controllers/userControllers.js")

userRoutes.use(bodyParser.urlencoded({extended: false}))
userRoutes.use(bodyParser.json())

userRoutes.get("/login", getLogin)

userRoutes.post("/login", isLoggedIn, postLogin)

userRoutes.get("/dashboard", getDashBoard)

userRoutes.get("/register", getRegister)

userRoutes.post("/register", postRegister)

module.exports = userRoutes;