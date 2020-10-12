'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_game_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userIdHistory: {
        type: Sequelize.INTEGER,
        //kode di bawah ini untuk menyambungkan asosiasi one-to-one
        references: { model: 'user_games', key: 'id' },
        onDelete: 'CASCADE',
      },
      gamePlayed: {
        allowNull: true,
        type: Sequelize.STRING
      },
      win: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      lose: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      draw: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_game_histories');
  }
};