"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Poems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        default: Sequelize.CURRENT_TIMESTAMP
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        default: Sequelize.CURRENT_TIMESTAMP
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Poems");
  }
};
