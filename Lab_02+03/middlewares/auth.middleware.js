const express = require("express");
const mysql = require('mysql');

const isLoggedIn = (req, res, next)=>{

    const email = req.body.email;
    const password = req.body.password;

    // Create a connection to the mysql database
    const db = mysql.createConnection({
        host        : 'localhost',
        user        : 'SuperUser',
        password    : '1234',
        database    : 'server programming lab 02/03'
    })

    const sqlQuery = "SELECT Email, Password FROM users WHERE Email='" + email + "'";

    db.query(sqlQuery, (err, result) => {
        if(err) throw err;
        console.log(result);

        console.log(result[0].Password + ' ' + password);
        if(result.length >= 1 && password == result[0].Password){
            db.release;
            next();
        }  
        else
            res.redirect("/register");
        db.release;
    })
    
}

module.exports = isLoggedIn;