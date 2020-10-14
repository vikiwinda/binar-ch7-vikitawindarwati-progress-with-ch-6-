// const userGameHistory = require('../models').user_game_history;
const generalController = require('./generalController')

module.exports = {
    list: async(req, res) => {
        generalController.list().then(users => res.status(200).send(users))
    },
    getById: async(req, res) => {
        generalController.getById().then(user => res.status(200).send(user))
    },
    add: async(req, res) => {
        generalController.add().then(user => res.status(201).send(user))
    },
    update: async(req, res) => {
        generalController.update().then(user => res.status(200).send(user))
    },
    remove: async(req, res) => {
        generalController.remove().then(user => res.status(204).send(user))
    },
}

