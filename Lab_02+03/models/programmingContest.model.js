const mongoose = require('mongoose');
const MOSchema = new mongoose.Schema({
    teamName:{
        type: String,
        required: true
    },
    institutionName:{
        type: String,
        required: true
   },

   coachName:{
        type: String,
        required: true
   },
   coachContact:{
        type: String,
        required: false
    },
   coachEmail:{
        type: String,
        required: false
   },
   coachTShirt:{
        type: String,
        required: true
   },

   leaderName:{
        type: String,
        required: true
   },
   leaderContact:{
        type: String,
        required: false
    },
    leaderEmail:{
        type: String,
        required: false
   },
   leaderTShirt:{
        type: String,
        required: true
   },

   member1Name:{
        type: String,
        required: true
    },
    member1Contact:{
        type: String,
        required: false
    },
    member1Email:{
        type: String,
        required: false
    },
    member1TShirt:{
        type: String,
        required: true
    },

    member2Name:{
        type: String,
        required: true
    },
    member2Contact:{
        type: String,
        required: false
    },
    member2Email:{
        type: String,
        required: false
    },
    member2TShirt:{
        type: String,
        required: true
    },
    selected:{
        type: Boolean,
        required: true
    },
});

const programmingContest = mongoose.model("programmingContest", MOSchema);
module.exports = programmingContest;
