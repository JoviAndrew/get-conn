'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'test',
      password: 'test',
      salt: null,
      firstname: 'John',
      lastname: 'Doe',
      gender: 'Male',
      birth_date: new Date('1999-01-01'),
      profilePicture: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
