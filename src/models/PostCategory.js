module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        type: DataTypes.INTEGER
      },
      categoryId: {
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
  };

  return PostCategory;
};
