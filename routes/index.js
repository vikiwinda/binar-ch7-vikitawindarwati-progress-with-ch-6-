const express = require('express');
const router = express.Router();

//calling router for homepage
const homepage = require('./homepage');

//calling router for api
const restAPI = require('./restAPI')


//set router
//For view/dashboard
router.use("/homepage", homepage);

//API
router.use("/api", restAPI);


module.exports = router;