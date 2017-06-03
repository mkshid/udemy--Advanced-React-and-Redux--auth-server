const User = require('../models/user');

exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    

    User.findOne({email: email}, function(err, existingUser){
        
    });

}

