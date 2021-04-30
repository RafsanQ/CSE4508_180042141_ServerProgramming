const fs = require("fs");



fs.readFile('i:/PoraLekha/5/Server Progrmming Lab/Lab_1_180042141/contents/avout.js', (err,data)=>{
    if(err){
        console.log("error:");
        console.log(err);
    } else {
        console.log("read successful\n" + data);
    }
    
});