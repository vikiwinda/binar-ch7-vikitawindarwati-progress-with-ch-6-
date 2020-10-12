const { user_game } = require('../models')
// const passport = require('../lib/passport')

function format(user) {
    const { id, username } = user
    return {
        id,
        username,
        accessToken: user.generateToken()
    }
}

const ROLES = {
    Admin: 'Admin',
    Player: 'Player'
}

const checkRole = (...roles) => (req, res, next) => {
    if (!req.user) {
        return res.redirect('/')
    }   
    const hasRole = roles.find(role => req.user.role === role)
        if (!hasRole) {
            return res.redirect('/login')
        }
        return next()
}

module.exports = {
    register: (req, res, next) => {
        //calling static method register from model user_game
        user_game.register(req.body)
        .then(()=>{
            res.redirect('/homepage') //redirect homepage untuk login
        })
        .catch(err => next(err))
    },

    loginJwt: (req, res) => {
        user_game.authenticate(req.body)
        .then(user => {
            checkRole(user)
            // var data = format(user)
            // res.render('playerPage', { data: data })
        })
    },

    whoamiJwt: (req, res) => {
        const currentUser = req.user;
        res.json(currentUser)
    }
}