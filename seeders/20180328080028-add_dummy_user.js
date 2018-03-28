'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Users', [{
      email: "budi_hartono@sekolah.com",
      password: "$2a$10$2tVX4.M87uzFiwuOO9v8aeuX3edO1gb6PGZHmXW/ueHmKz4H73XPe",
      salt: "$2a$10$2tVX4.M87uzFiwuOO9v8ae",
      firstname: "Budi",
      lastname: "Hartono",
      gender: "Male",
      birth_date: new Date("03/24/1987"),
      profilePicture: "",
      createdAt : new Date(),
      updatedAt : new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Users', [{
      email: "budi_hartono@sekolah.com",
      password: "$2a$10$2tVX4.M87uzFiwuOO9v8aeuX3edO1gb6PGZHmXW/ueHmKz4H73XPe",
      salt: "$2a$10$2tVX4.M87uzFiwuOO9v8ae",
      firstname: "Budi",
      lastname: "Hartono",
      gender: "Male",
      birth_date: new Date("03/24/1987"),
      profilePicture: "",
      createdAt : new Date(),
      updatedAt : new Date()
    }], {})
  }
};
