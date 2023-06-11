const express = require('express');
const router = express.Router();

const {ensureAuthenticated, addUserData} = require("../middlewares/auth.middleware");

const {
    getPC,
    postPC,
    getPCList,
    deletePC,
    selectPC,
    getUpdatePC,
    postUpdatePC
} = require("./../controllers/programmingContest.controller");

router.get("/register", ensureAuthenticated, addUserData, getPC);
router.post('/register', ensureAuthenticated, addUserData, postPC);
router.get('/list', ensureAuthenticated, addUserData, getPCList);
router.get('/delete/:id', ensureAuthenticated, addUserData, deletePC);
router.get('/select/:id', ensureAuthenticated, addUserData, selectPC);
router.get('/update/:id', ensureAuthenticated, addUserData, getUpdatePC);
router.post('/update', ensureAuthenticated, addUserData, postUpdatePC);

module.exports = router;
