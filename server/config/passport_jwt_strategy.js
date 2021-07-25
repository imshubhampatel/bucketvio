const passport = require("passport");
const JwtStragety = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/userSchema");

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESSTOKEN_SECRET,
};

passport.use(new JwtStragety(opts, function (jwtPayload, done) {

    User.findOne(jwtPayload._id, function (err, user) {
        if (err) {console.log(err); return;}
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }).select("-password");
}));

module.exports = passport;