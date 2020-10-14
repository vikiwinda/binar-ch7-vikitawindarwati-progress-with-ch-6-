const passport = require('passport')
const { Strategy : JwtStrategy, ExtractJwt } = require('passport-jwt')
const { user_game } = require('../models')

//JWT
const options = {
    //no cookies:
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    // jwtFromRequest : ExtractJwt.fromUrlQueryParameter,
    //with cookies:
    // jwtFromRequest: req => req.cookies.jwt,
    secretOrKey : 'secret',
    // passReqTocallBack: true
}

passport.use(new JwtStrategy(options, async(payload, done) => {
    user_game.findByPk(payload.id)
    .then(user => done(null, user))
    .catch(err => done(err, false))
}))

module.exports = passport;