const express = require('express');
const router = express.Router();
const userGameController = require('../controllers/user_game_viewEngine')
const restrict = require('../middlewares/restrictJwt')

//auth
const auth = require('../controllers/authController')

//start page endpoint /homepage
router.get('/', (req, res) => res.status(200).send('This is homepage'))

//POST register n login
router.post('/register', auth.registerAPI)
router.post('/login', auth.loginAPI)


module.exports = router;