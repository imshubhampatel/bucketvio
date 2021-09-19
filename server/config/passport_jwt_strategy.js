const passport = require("passport");
const JwtStragety = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/userSchema");

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

passport.use(new JwtStragety(opts, async (jwtPayload, done) => {
    // console.log("jwt ", jwtPayload)
    await User.findById(jwtPayload._id, function (err, user) {
        if (err) { console.log(err); return (err, false); }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }).select("-password");
}));

module.exports = passport;