const mysql = require('mysql');


const getRegister = (req, res)=>{
    // res.sendFile("registerPage.html", {root: "./views/users/"});   
    res.render("users/register.ejs");
}

const postRegister = (req, res)=>{

    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;
    const gender = req.body.gender;


    // console.log("email:" + email + " username: " + username + " password: " + password + " gender: " + gender);

    if(password != password2){
        res.redirect('./');
        return;
    }

    // Create a connection to the mysql database
    const db = mysql.createConnection({
        host        : 'localhost',
        user        : 'SuperUser',
        password    : '1234',
        database    : 'server programming lab 02/03'
    })

    const sqlQuery = "INSERT INTO users (Email, Name, Gender, Password) VALUES ('" + email + "', '" + username + "', '" + gender + "', '" + password + "')";

    // console.log("Query= " + sqlQuery);

    db.query(sqlQuery, (err, result) => {
        if(err) {
            res.redirect('/register')
            throw err;
        }

        res.redirect('/login');
        
    })

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
        res.send('dash board page. The username is ' + result[0].Name);
    })

}

module.exports = {getRegister, postLogin, postRegister, getLogin, getDashBoard, postDashBoard}