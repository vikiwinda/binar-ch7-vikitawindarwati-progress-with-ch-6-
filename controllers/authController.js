const { user_game } = require('../models')
// const passport = require('../middlewares/local-passport')

function format(user) {
    const { id, username } = user
    return {
        id,
        username,
        accessToken: user.generateToken()
    }
}

module.exports = {
    //view engine auth
    register: (req, res, next) => {
        //calling static method register from model user_game
        user_game.register(req.body)
        .then(()=>{
            res.redirect('/homepage') //redirect homepage untuk login
        })
        .catch(err => next(err))
    },

    loginJwt: async(req, res) => {
        //can I make it async/await so I can no longer user .then?
        user_game.authenticate(req.body)
        .then(() => {
            //maybe role started here?
            res.redirect('/homepage/playerPage-protected') //redirect to protected, with role implementation later
        })

        // const [loginErr, token] = await user.game.authenticate(req.body)
        // if (loginErr) {
        //     res.send('LoginErr')
        // }
        // return res.status(200).cookie('jwt', token, {
        //     httpOnly: true
        // })
    },

    whoamiJwt: (req, res) => {
        const currentUser = req.user;
        // res.render('')
    },

    //api auth
    registerAPI: (req, res, next) => {
        //calling static method register from model user_game
        user_game.register(req.body)
        .then((registered)=>{
            res.status(200).send(registered)
        })
        .catch(err => next(err))
    }, 

    loginAPI: (req, res) => {
        user_game.authenticate (req.body)
            .then(user => {
                res.json(
                format(user)
                )
            })
    },
    
    whoamiAPI: (req, res) => {
        const currentUser = req.user;
        res.json(currentUser)
    }

}