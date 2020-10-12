'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one-to-one relation map with gameBio and gameHistory
      user_game.hasOne(models.user_game_biodata, {
        foreignKey: 'userIdBio',
        as: 'user_game_biodata'
      })
      user_game.hasOne(models.user_game_history, {
        foreignKey: 'userIdHistory',
        as: 'user_game_history'
      })
    }

    //method for encryption
    static #encrypt = (password) => bcrypt.hashSync (password, 10)

    //register method
    static register = ({ username, password, email, role }) => {
      const encryptedPassword = this.#encrypt(password)
      return this.create({ username, password : encryptedPassword, email, role })
    }

    //mencocokkan password dari form dengan hashed password
    checkPassword = password => bcrypt.compareSync(password, this.password)

    //JWT
    generateToken = () => {
      //jgn masukan password ke payload
      const payload = {
        id: this.id,
        username: this.username
      }
      //untuk verifikasi apakah token ini benar2 berasal dari aplikasi kita
      const rahasia = 'secret'
      //token dr data2 diatas
      const token = jwt.sign(payload, rahasia)
      return token

    }
    //method authenticate for login
    static authenticate = async ({ username, password }) => {
      try {
        const user = await this.findOne({ where: { username }})
        if (!user) return Promise.reject("User not found")
    
        const isPasswordValid = user.checkPassword(password)
        if (!isPasswordValid) return Promise.reject("Wrong password")
    
        return Promise.resolve(user)
      }
      catch(err) {
        return Promise.reject(err)
      }
    }
  };
  user_game.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user_game',
  }, {
    // freezeTableName: true,
  });
  return user_game;
};