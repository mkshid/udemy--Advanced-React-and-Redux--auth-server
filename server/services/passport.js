const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


const jwtOptions = {};


// Create the jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    // payload is the decoded token
    // se if user id in payload if it does call 'done' else
    // call done without user object

    User.findById(payload.sub, function(err, user){
        if (err) { return done(err, false);}

        if (user){
            done(null, user);
        } else {
            done(null, false);
        }
    })

})
