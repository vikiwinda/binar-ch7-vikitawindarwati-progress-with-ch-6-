'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('user_games', [{
      username: 'Jonathan',
      email: 'JoJo@mail.com',
      password: 'diodio',
      role: 'Player',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'DioBrando',
      email: 'konodioda@mail.com',
      password: 'JoeJoe',
      role: 'Player',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'AngelaMoss',
      email: 'ecorp@mail.com',
      password: 'everybodyWantsToRule',
      role: 'Player',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'TylerDurden',
      email: 'firstrule@mail.com',
      password: 'YouDoNotTalkAbout',
      role: 'Player',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'SquidwardTentacles',
      email: 'clarinet@mail.com',
      password: 'HereLiesDreamAndHope',
      role: 'Player',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_games', {}, {});
  }
};
