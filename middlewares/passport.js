const passport = require('passport')
const { user_game } = require('../models')

const setup = () => {
    passport.serializeUser((user, done) => done(null, user._id))
  
    passport.deserializeUser(async (id, done) => {
      try {
        const user = await user_game.findById(id)
        return done(null, user)
      } catch (err) {
        return done(err, null)
      }
    })
  }
 
  module.exports = setup;