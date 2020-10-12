const userGame = require('../../models').user_game;
const userGameBio = require('../../models').user_game_biodata;
const userGameHistory = require('../../models').user_game_history;
// const url = require('url');


module.exports = {
    list(req, res) {
        return userGame
        .findAll({
            include: [],
            order: [['id', 'ASC']],
        })
        .then((users) => {
                res.status(200).send(users) 
                // res.status(200).render('dashboard', { data: users }) 
        })
        .catch((error) => { res.status(400).send(error); })
    },

    getById(req, res) {
        return userGame
        .findByPk(req.params.id, {
            include: [{
                model: userGameBio,
                as: 'user_game_biodata',
            },
            {
                model: userGameHistory,
                as: 'user_game_history',
            }],
        })
        .then((user)=> {
            // var getUrl = url.parse(req.url).pathname.split('/');
            if (!user) {
                return res.status(404).send({
                    message: 'User Not Found'
                })
            }
            // else if(getUrl.includes('users')) {
                return res.status(200).send(user);
            // }
            // else if(getUrl.includes('dashboard')) {
                // return res.status(200).render('dashboardGetId', { data: user });
            })
        // })
        .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return userGame
        .create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        })
        .then((user) => {
            // var getUrl = url.parse(req.url).pathname.split('/');
            // if(getUrl.includes('users')) {
                res.status(201).send(user)
            // }
            // else if(getUrl.includes('dashboards')) {
                // res.status(201).redirect('/dashboard')
            // }
        })
        .catch((error) => res.status(400).send(error));
    },
    
    update(req, res) {
        return userGame
        .findByPk(req.params.id)
        .then(user=>{
            if(!user) {
                return res.status(404).send({
                    message: 'User Not Found',
                });
            }
            return user
            .update({
                username: req.body.username || user.name,
                email: req.body.email || user.email,
                password: req.body.password || user.password,
                // role: req.body.role || user.role,
            })
            .then(() => {
                // var getUrl = url.parse(req.url).pathname.split('/');
                // if(getUrl.includes('users')) {
                    // res.status(200).send(user)
                // }
                // else if(getUrl.includes('dashboards')) {
                    res.redirect('/dashboard')
                // }
            })
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return userGame
        .findByPk(req.params.id)
        .then(user => {
          if (!user) {
            return res.status(400).send({
              message: 'User Not Found',
            });
          }
          return user
          .destroy(({truncate: true, restartIdentity: true}))
          .then(() => {
                // var getUrl = url.parse(req.url).pathname.split('/');
                // if(getUrl.includes('users')) {
                    // res.status(204).send(user)
                // }
                // else if(getUrl.includes('dashboards')) {
                    res.redirect('/dashboard')
                // }
          })
          .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
};

