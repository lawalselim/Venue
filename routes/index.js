var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
const csrf = require('csurf');
var LocalStrategy = require('passport-local').Strategy;


/* Get Home Page */


router.get('/', function (req, res, next) {
    res.render('/main/index', { title: 'Venue' });
});

router.get('/signin', function (req, res, next) {
    res.render('/main/signin', { title: 'SignIn' });
});

router.get('/signup', function (req, res, next) {
    res.render('/main/signup', { title: 'Sign Up' });
});

router.get('/venue', function (req, res, next) {
    res.render('/main/venue', { title: 'Venue pages' });
});

router.get('/profile', function (req, res, next) {
    res.render('/main/profile', { title: 'User Profile' });
});


module.exports = router;