const mysql = require('mysql');

const db = mysql.createConnection({
        host        : 'localhost',
        user        : 'SuperUser',
        password    : '1234',
        database    : 'server programming lab 02/03'
})

db.connect((err) => {
        if(err){
                console.log('Mysql not conncected...'); 
                throw err;       
        }
        else  
                console.log('Mysql conncected...');
});

const email = 'Admin';

const sqlQuery = "SELECT Email, Password FROM users WHERE Email='" + email + "'";
db.query(sqlQuery, (err, result) => {
        if(err) throw err;
        console.log(result);
})
db.release;



