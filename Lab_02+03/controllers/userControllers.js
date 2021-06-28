const getRegister = (req, res)=>{
    res.sendFile("registerPage.html", {root: "./views/users/"});    
}

const postRegister = (req, res)=>{
    res.redirect('/dashboard');
}

const getLogin = (req, res)=>{
    res.sendFile("loginPage.html", {root:"./views/users/"});
}

const postLogin = (req, res)=>{
    
}

const getDashBoard = (req, res)=>{
    res.send(`dash board page`);
}

module.exports = {getRegister, postLogin, postRegister, getLogin, getDashBoard}