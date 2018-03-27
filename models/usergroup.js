'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserGroup = sequelize.define('UserGroup', {
    UserId: DataTypes.INTEGER,
    GroupId: DataTypes.INTEGER
  }, {});
  UserGroup.associate = function(models) {
    // associations can be defined here
  };
  return UserGroup;
};