require('dotenv').config();

app = require("./app.js");

const PORT = process.env.portToUse;

app.listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}.`);
});

