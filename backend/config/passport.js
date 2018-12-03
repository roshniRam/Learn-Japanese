const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {User} = require('../models/User');
const secretOrKey = require('./keys').privateKey
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;

module.exports = passport = passport => {
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        // console.log(jwt_payload);
        User.findById(jwt_payload.id)
        .then(user => {
            if (user) {
                return done(null, user);
            }

            return done(err, false);
        })
        .catch(err => { console.log(err); });
    }));
}