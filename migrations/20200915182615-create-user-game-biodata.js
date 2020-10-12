'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_game_biodata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userIdBio: {
        type: Sequelize.INTEGER,
        references: { model: "user_games", key: "id" },
        onDelete: 'CASCADE',
      },
      address: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      gender: {
        allowNull: true,
        type: Sequelize.STRING
      },
      favoriteGenre: {
        allowNull: true,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('user_game_biodata');
  }
};