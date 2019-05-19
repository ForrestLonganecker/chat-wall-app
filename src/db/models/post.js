'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER, 
      allowNull: false
    }
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    
  };
  return Post;
};