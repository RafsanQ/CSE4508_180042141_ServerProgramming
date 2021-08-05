const mathOlympiad = require('../models/mathOlymiad.model')

const getMO = (req, res) => {
    res.render('math-olympiad/register.ejs')
}

const postMO = (req, res) => {
    const {name, category, contactNo, email, institution, tshirt} = req.body;
    console.log({name, category, contactNo, email, institution, tshirt});
    res.render('math-olympiad/register.ejs')
}

const getMOList = (req, res) => {
    res.render('math-olympiad/list.ejs')
}

const deleteMO = (req, res) => {
    const id = req.params.id;
    console.log("ID found = " + id);
}

module.exports = {getMO, postMO, getMOList, deleteMO};
