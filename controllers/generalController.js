const userGame = require('../models').user_game;
const userGameBio = require('../models').user_game_biodata;
const userGameHistory = require('../models').user_game_history;


//admin privilege
const list = async () => {
    const listed = await userGame.findAll({
        include: [],
        order: [['id', 'ASC']],
    });
    return listed;
}

//mostly used for user/player (restricted)
const getById = async () => {
    const getId = await userGame.findByPk(req.params.id, {
        include: [{
            model: userGameBio,
            as: 'user_game_biodata',
        },
        {
            model: userGameHistory,
            as: 'user_game_history',
            }],
        });
        return getId;
}

//add, admin only? (restricted)
const add = async () => {
    const adding = await userGame.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    });
    return adding;
}

//admin? restricted
const update = async () => {
    const findUser = await userGame.findByPk(req.params.id)
    if(!findUser.ok) { res.send({ message: error })}
    else {
        const updating = await userGame.update({
            username: req.body.username || user.name,
            email: req.body.email || user.email,
            password: req.body.password || user.password,
            // role: req.body.role || user.role,
        });
        return updating;
    }
}


//admin? restricted
const remove = async () => {
    const findUser = await userGame.findByPk(req.params.id)
    if(!findUser.ok) { res.send({ message: error })}
    else {
        const deleting = await userGame.destroy({})
        return deleting;
    }
}


module.exports = {
    list,
    getById,
    add,
    update,
    remove
}