var express = require('express');
var router = express.Router();
var csurf = require('csurf');
var users = require('../models/user');

var csurfProtection = csurf();
router.use(csurfProtection);

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', (req, res) => {

})

module.exports = router;


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}