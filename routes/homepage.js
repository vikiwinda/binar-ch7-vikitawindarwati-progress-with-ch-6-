const express = require('express');
const router = express.Router();
const userGameController = require('../controllers/user_game_viewEngine')
const restrict = require('../middlewares/restrictJwt')
// const localRestrict = require('../middlewares/restrictLocal')
//auth
const auth = require('../controllers/authController')

//start page endpoint /homepage
router.get('/', (req, res) => res.render('homepage'))

//POST register n login
router.post('/register', auth.register)
router.post('/login', auth.loginJwt)

//route restricted
router.get('/playerPage-protected', restrict, (req, res) => res.render('playerPage'))
// router.get('/dashboard', restrict, auth.whoamiJwt)
// router.get('/oldDashboard', userGameController.list)
module.exports = router;