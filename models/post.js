'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    GroupId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};