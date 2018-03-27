'use strict';
module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('Group', {
    groupName: DataTypes.STRING,
    groupPicture: DataTypes.STRING,
    groupDesc: DataTypes.STRING,
    adminId: DataTypes.INTEGER
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
  };
  return Group;
};