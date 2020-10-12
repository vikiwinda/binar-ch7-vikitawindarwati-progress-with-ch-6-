const express = require('express');
const router = express.Router();

//calling router for homepage
const homepage = require('./homepage');

//set router
router.use("/homepage", homepage);

module.exports = router;