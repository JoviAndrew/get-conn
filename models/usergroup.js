'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserGroup = sequelize.define('UserGroup', {
    UserId: DataTypes.INTEGER,
    GroupId: DataTypes.INTEGER
  }, {});
  UserGroup.associate = function(models) {
    // associations can be defined here

    UserGroup.belongsTo(models.User);
    UserGroup.belongsTo(models.Group);
  };
  return UserGroup;
};