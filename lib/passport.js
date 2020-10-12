const passport = require('passport')
const { Strategy : JwtStrategy, ExtractJwt } = require('passport-jwt')
const { user_game } = require('../models/user_game')

//JWT
const options = {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey : 'secret',
}

// async function authenticate(username, password, done) {
//     try {
//         const user = await User.authenticate({ username, password })
//         return done(null, user)
//     }
//     catch(err) {
//         return done(null, false, { message: err.message })
//     }
// }

passport.use(new JwtStrategy(options, async(payload, done) => {
    user_game.findByPk(payload.id)
    .then(user => done(null, user))
    .catch(err => done(err, false))
}))
//cara untuk membuat sesi dan menghapus sesi
// passport.serializeUser(
//     (user, done) => done(null, user.id)
// )

// passport.deserializeUser(
//     async (id, done) => done(null, await User.findByPk(id))
// )

module.exports = passport;