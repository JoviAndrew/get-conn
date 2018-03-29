'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    profilePicture: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate: function(user, options){
        var bcrypt = require('bcrypt');
        const saltRounds = 10;
        
        var salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(user.password, salt)
        user.salt = salt
        user.password = hash;
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.UserGroup);
    User.belongsToMany(models.Group, {
      through: 'UserGroup'
    })
  };

  return User;
};
