const generalController = require('./generalController')

module.exports = {
    list: async(req, res) => {
        generalController.list().then(users => res.render('oldDashboard', { data: users }))
    },
    getById: async(req, res) => {
        generalController.getById().then(user => res.render('oldDashboard', { data: user }))
    },
    add: async(req, res) => {
        generalController.add().then(user => res.render('oldDashboard', { data: user }))
    },
    update: async(req, res) => {
        generalController.update().then(user => res.render('oldDashboard', { data: user }))
    },
    remove: async(req, res) => {
        generalController.remove().then(user => res.render('oldDashboard', { data: user }))
    },

}