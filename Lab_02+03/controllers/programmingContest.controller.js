const programmingContest = require('../models/programmingContest.model')
const mail = require('../Node Mailer Stuff/programmingContest.mailer')
const crypto = require('crypto');
const { hash } = require('bcryptjs');

const getPC = (req, res) => {
    res.render('programming-contest/register.ejs', {error:req.flash('error')})
}

const postPC = (req, res) => {
    const {teamName, institutionName, coachName, coachContact, coachEmail, coachTShirt, leaderName, leaderContact, leaderEmail, leaderTShirt, member1Name, member1Contact, member1Email, member1TShirt, member2Name, member2Contact, member2Email, member2TShirt} = req.body;
    let error = "";

    selected = false;

    // Create Unique code by hashing the team name
    const hashID = crypto.createHash('sha1')
    .update(teamName)
    .digest('hex');

    programmingContest.findOne({teamName:teamName}).then((team) => {
        if(team){
            error = "Team with this name already exists."
            req.flash('error', error);
            res.redirect('register');
        }else{
            const team = new programmingContest({
                teamName, 
                institutionName, 
                coachName, 
                coachContact, 
                coachEmail, 
                coachTShirt, 
                leaderName, 
                leaderContact, 
                leaderEmail,
                leaderTShirt, 
                member1Name, 
                member1Contact, 
                member1Email, 
                member1TShirt, 
                member2Name, 
                member2Contact, 
                member2Email, 
                member2TShirt,
                selected,
                hashValue: hashID,
            });

            team
            .save()
            .then(()=>{
                error = "Team has been registered successfully.";

                // Send everyone an email with the hash
                mail(leaderEmail, hashID, teamName, leaderName);
                mail(member1Email, hashID, teamName, member1Name);
                mail(member2Email, hashID, teamName, member2Name);
                mail(coachEmail, hashID, teamName, coachName);

                req.flash('error', error);
                res.redirect('register');
            })
            .catch((e)=>{
                error = "Unexpected error has occured";
                console.log(e);
                res.redirect("register")
            })
        }
    })
}

const getPCList = (req, res) => {
    let all_participants = [];
    programmingContest.find().then((data) => {
        all_participants = data;
        res.render("programming-contest/list.ejs", {
            error: req.flash('error'),
            participants: all_participants
        });
    }).catch(() => {
        error = 'Failed to fetch data';
        res.render("programming-contest/list.ejs", {
            error: req.flash('error', error),
            participants: all_participants
        });
    })
}


const deletePC = (req, res) => {
    const id = req.params.id;
    programmingContest.deleteOne({_id:id}, (err)=>{
        if(err){
            error = "failed to delete data";
            req.flash('error', error);
            res.redirect('/ProgrammingContest/list');
        }else{
            error = "Data Deleted Successfully.";
            req.flash('error', error);
            res.redirect('/ProgrammingContest/list');
        }
    });
}


const selectPC = (req, res) => {
    const id = req.params.id;
    programmingContest.findOne({_id:id}).then((participant) => {
        programmingContest.findByIdAndUpdate({_id:id}, {selected: true}, (err) => {
            if(err){
                error = "Failed to Update data";
                req.flash('error', error);
                res.redirect('/ProgrammingContest/list');
            }else{
                error = "Data Updated Successfully.";
                req.flash('error', error);
                res.redirect('/ProgrammingContest/list');
            }
        }).catch(() => {
            error = "Failed to Update data. Unknown Error.";
            req.flash('error', error);
            res.redirect('/ProgrammingContest/list');
        })
    })
}

const getUpdatePC = (req, res) => {
    const id = req.params.id;
    res.render("programming-contest/update.ejs", {
        error: req.flash('error'),
        id:id
    });
}

const postUpdatePC = (req, res) => {
   const {id, teamName, institutionName, coachName, coachContact, coachEmail, coachTShirt, leaderName, leaderContact, leaderEmail, leaderTShirt, member1Name, member1Contact, member1Email, member1TShirt, member2Name, member2Contact, member2Email, member2TShirt} = req.body;
   programmingContest.findOne({_id:id}).then((team) => {
    programmingContest.findByIdAndUpdate({_id:id}, {
        teamName: teamName, 
        institutionName: institutionName, 
        coachName: coachName, 
        coachContact: coachContact, 
        coachEmail: coachEmail, 
        coachTShirt: coachTShirt, 
        leaderName: leaderName, 
        leaderContact: leaderContact, 
        leaderEmail: leaderEmail, 
        leaderTShirt: leaderTShirt, 
        member1Name: member1Name, 
        member1Contact: member1Contact,
        member1Email: member1Email, 
        member1TShirt: member1TShirt, 
        member2Name: member2Name, 
        member2Contact: member2Contact, 
        member2Email: member2Email, 
        member2TShirt: member2TShirt
    }, (err) => {
        if(err){
            error = "Failed to Update data";
            req.flash('error', error);
            res.redirect('/ProgrammingContest/list');
        }else{
            error = "Data Updated Successfully.";
            req.flash('error', error);
            res.redirect('/ProgrammingContest/list');
        }
    }).catch(() => {
        error = "Failed to Update data. Unknown Error.";
        req.flash('error', error);
        res.redirect('/ProgrammingContest/list');
    })
})
}

module.exports = {getPC, postPC, getPCList, deletePC, selectPC, getUpdatePC, postUpdatePC};
