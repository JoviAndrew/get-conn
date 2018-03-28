'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    PostId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Post);
    Comment.belongsTo(models.User);
  };

  Comment.getAllComment = function (user, PostId, callback) {
    this.findAll({
      where: {PostId: PostId},
      include: [{model: user}]
    })
    .then(comments => {
      console.log(comments);
      callback(comments);
    })
  }

  return Comment;
};
