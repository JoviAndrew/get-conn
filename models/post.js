'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    GroupId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.Group);
    Post.belongsTo(models.User);
    Post.hasMany(models.Comment);
  };

  Post.prototype.getPostedDate = function (callback) {
    let day = this.createdAt.getDate();
    let month = this.createdAt.getMonth();
    let year = this.createdAt.getFullYear();

    return `${day}/${month}/${year}`
  }

  Post.getAllPost = function (user, comment, id, callback) {
    this.findAll({
      where: {GroupId: id},
      include: [{
        model: user
      },{
        model: comment,
        include: user
      }]
    })
    .then(posts => {
      console.log(comment);
      callback(posts);
    })
  }

  return Post;
};
