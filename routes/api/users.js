const express = require('express');
const router = express.Router();

//Import our User model
const User = require('../../models/user');

//GET User List
router.get('/list', (req, res, next) => {
    //Find all matching users
    User.find((err, users) => {
        if (err) {
            //if something is broken send an error
          return res.send(err);
        }
        //Otherwise send the array of users
        return res.json(users);
    });
});

module.exports = router;