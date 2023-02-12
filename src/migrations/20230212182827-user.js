'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.creatTable('users', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      display_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imae: {
        type: Sequelize.STRING
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    queryInterface.dropTable('users')
  }
};
