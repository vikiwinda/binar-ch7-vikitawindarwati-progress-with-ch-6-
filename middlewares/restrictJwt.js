const passport = require('./jwt')

module.exports = passport.authenticate('jwt', { session: false })
