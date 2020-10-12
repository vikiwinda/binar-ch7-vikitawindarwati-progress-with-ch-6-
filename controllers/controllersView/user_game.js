// const userGame = require('../../models').user_game;
// const userGameBio = require('../../models').user_game_biodata;
// const userGameHistory = require('../../models').user_game_history;

fetch("https://localhost:5000/homepage/register")
.then((data)=> {
    res.render('dashboard', { data })
})
.catch((err)=> { res.render('dashboardError') })