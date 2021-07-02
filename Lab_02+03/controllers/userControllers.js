const mysql = require('mysql');
const bcrypt = require('bcrypt');


const getRegister = (req, res)=>{
    // res.sendFile("registerPage.html", {root: "./views/users/"});   
    res.render("users/register.ejs", {errors: req.flash('errors')});
}

const postRegister = (req, res)=>{

    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;
    const gender = req.body.gender;


    // Create a connection to the mysql database
    const db = mysql.createConnection({
        host        : 'localhost',
        user        : 'SuperUser',
        password    : '1234',
        database    : 'server programming lab 02/03'
    })


    const errors = [];

    console.log("email:" + email + " username: " + username + " password: " + password + " password2: " + password2 + " gender: " + gender);


    if(!email || !username || !password || !password2 || !gender){
        errors.push("All fields are required");
    }

    if(password.length < 6){
        errors.push("Password must be atleast 6 characters in length");
        
    }
    if(password != password2){
        errors.push("Passwords do not match");
    }

    const sqlQueryEmailChecker = "SELECT * FROM users WHERE Email='" + email + "'";

    db.query(sqlQueryEmailChecker, (err, result) => {
        if(err) throw err;

        if(result.length > 0){
            errors.push("Email already exists");
        }
    })

    if(errors.length > 0){
        req.flash("errors", errors);
        res.redirect('./register');
        db.release;
        return;
    }

    console.log("made it here");

    if(errors.length == 0){
        bcrypt.genSalt(10, (err,salt) => {
            if(err){
                errors.push(err); 
                req.flash("errors", errors);
                res.redirect('./register');
                db.release;
                return;
            }
                 
            else{
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err){
                        errors.push(err);
                        req.flash("errors", errors);
                        res.redirect('./register');
                        db.release;
                        return;
                    }
                        
                    else{
                        const passwordHashed = hash;
                        const sqlQuery = "INSERT INTO users (Email, Name, Gender, Password) VALUES ('" + email + "', '" + username + "', '" + gender + "', '" + passwordHashed + "')";

                         // console.log("Query= " + sqlQuery);

                        db.query(sqlQuery, (err1, result) => {
                            if(err1) {
                                res.redirect('/register')
                                throw err;
                            }

                            res.redirect('/login');
        
                        })
                    }     
                })
            }
        })
    }

    db.release;
    
}

const getLogin = (req, res)=>{
    // res.sendFile("loginPage.html", {root:"./views/users/"});
    res.render("users/login.ejs");
}

const postLogin = (req, res)=>{
    
    res.redirect(307, '/dashboard');



}

const getDashBoard = (req, res)=>{
    res.send(`dash board page`);
}

const postDashBoard = (req, res)=>{
    
    const email = req.body.email;


    // Create a connection to the mysql database
    const db = mysql.createConnection({
        host        : 'localhost',
        user        : 'SuperUser',
        password    : '1234',
        database    : 'server programming lab 02/03'
    })

    const sqlQuery = "SELECT Name FROM users WHERE Email='" + email + "'";

    db.query(sqlQuery, (err, result) => {
        if(err) throw err;

        const username = result[0].Name;

        res.render("dashboard.ejs", {Name: username});
    })

}

module.exports = {getRegister, postLogin, postRegister, getLogin, getDashBoard, postDashBoard}