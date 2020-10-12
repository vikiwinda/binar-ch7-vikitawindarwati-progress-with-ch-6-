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
      console: 'No',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'DioBrando',
      email: 'konodioda@mail.com',
      password: 'JoeJoe',
      console: 'Yes',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'AngelaMoss',
      email: 'ecorp@mail.com',
      password: 'iwillbesuccessful',
      console: 'No',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'TylerDurden',
      email: 'firstrule@mail.com',
      password: 'YouDoNotTalkAbout',
      console: 'Yes',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'SquidwardTentacles',
      email: 'clarinet@mail.com',
      password: 'HereLiesDreamAndHope',
      console: 'No',
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
