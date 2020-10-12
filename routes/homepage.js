const express = require('express');
const router = express.Router();
const userGameController = require('../controllers/controllersAPI/user_game')
const restrict = require('../middlewares/restrict')

//auth
const auth = require('../controllers/authController')

//start page endpoint /homepage
router.get('/', (req, res) => res.render('homepage'))

function fetchTry() {
    fetch("http://localhost:5000/homepage/login")
    .then((data)=> {
        res.render('dashboard', {data})
    })
}

//POST register n login
router.post('/register', auth.register)
router.post('/login', auth.loginJwt)

// router.get()

// router.get('/login', fetchTry)
//route restricted
router.get('/dashboard', restrict, auth.whoamiJwt)

module.exports = router;