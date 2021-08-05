const mathOlympiad = require('../models/mathOlymiad.model')

const getMO = (req, res) => {
    res.render('math-olympiad/register.ejs', {error:req.flash('error')})
}

const postMO = (req, res) => {
    const {name, category, contact, email, institution, tshirt} = req.body;
    console.log({name, category, contact, email, institution, tshirt});

    let registrationFee = 0;
    if(category == 'School') registrationFee = 250;
    else if(category == 'College') registrationFee = 400;
    else registrationFee = 500;

    const total = registrationFee;
    const paid = 0;
    const selected = false;
    const date = new Date();

    let error = "";

    mathOlympiad.findOne({name:name, contact:contact}).then((participant) => {
        if(participant){
            error = "Participant with this name and contact already exists."
            req.flash('error', error);
            res.redirect('register');
        }else{
            const participant = new mathOlympiad({
                name,
                category,
                contact,
                email,
                institution,
                total,
                paid,
                selected,
                tshirt,
                date
            });

            participant
            .save()
            .then(()=>{
                error = "Participant has been registered successfully.";
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

const getMOList = (req, res) => {
    let all_participants = [];
    mathOlympiad.find().then((data) => {
        all_participants = data;
        res.render("math-olympiad/list.ejs", {
            error: req.flash('error'),
            participants: all_participants
        });
    }).catch(() => {
        error = 'Failed to fetch data';
        res.render("math-olympiad/list.ejs", {
            error: req.flash('error', error),
            participants: all_participants
        });
    })
}


const deleteMO = (req, res) => {
    const id = req.params.id;
    console.log("ID found = " + id);
}

module.exports = {getMO, postMO, getMOList, deleteMO};
