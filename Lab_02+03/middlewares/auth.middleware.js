const e = require("express");

const isLoggedIn = (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.email;
    if(email == "admin" && password == "admin")
        next();
    else
        res.redirect("/register");
    
}


module.exports = isLoggedIn;