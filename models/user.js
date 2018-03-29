'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email:{
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: false,
          msg: 'email format is incorrect!'
        },
        isUnique: function(value, msg) {
          let where = {email: value}
          if (this.id !== null) {
            where = {
              email: value,
              id: {$ne: this.id}
            }
          }
          User.findAll({where: where})
          .then(results => {
            if (results.length > 0) {
              msg(new Error('email already taken!'));
            }
            msg();
          })
        }
      }
    },
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
