 const mongoose = require('mongoose');
 const MOSchema = new mongoose.Schema({
     name:{
         type: String,
         required: true
     },
     category:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: false
    },
    institution:{
        type: String,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    paid:{
        type: Number,
        required: true
    },
    selected:{
        type: Boolean,
        required: true
    },
    tshirt:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    hashValue: {
        type: String,
        required: true
    },
 });

 const mathOlympiad = mongoose.model("mathOlympiad", MOSchema);
 module.exports = mathOlympiad;
