const programmingContest = require('../models/programmingContest.model')

const getPC = (req, res) => {
    res.render('programming-contest/register.ejs', {error:req.flash('error')})
}

const postPC = (req, res) => {
    const {teamName, institutionName, coachName, coachContact, coachEmail, coachTShirt, leaderName, leaderContact, leaderEmail, leaderTShirt, member1Name, member1Contact, member1Email, member1TShirt, member2Name, member2Contact, member2Email, member2TShirt} = req.body;
    console.log({teamName, institutionName, coachName, coachContact, coachEmail, coachTShirt, leaderName, leaderContact, leaderEmail, leaderTShirt, member1Name, member1Contact, member1Email, member1TShirt, member2Name, member2Contact, member2Email, member2TShirt});
    let error = "";

    selected = false;

    programmingContest.findOne({teamName:teamName}).then((team) => {
        if(team){
            error = "Team with this name and contact already exists."
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
                selected
            });

            team
            .save()
            .then(()=>{
                error = "Team has been registered successfully.";
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
    console.log("HERE");
    programmingContest.find().then((data) => {
        all_participants = data;
        console.log(all_participants)
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
    console.log("ID found = " + id);
}


const selectPC = (req, res) => {
    const id = req.params.id;
    mathOlympiad.findOne({_id:id}).then((participant) => {
        mathOlympiad.findByIdAndUpdate({_id:id}, {selected: true}, (err) => {
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

module.exports = {getPC, postPC, getPCList, deletePC, selectPC};
