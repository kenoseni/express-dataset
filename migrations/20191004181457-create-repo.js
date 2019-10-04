'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Repos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    },
    actorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Actors',
        key: 'id',
        as: 'actorId'
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Repos')
}
