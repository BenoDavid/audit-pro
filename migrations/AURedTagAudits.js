'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AURedTagAudits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scheduleId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shiftId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      locationId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      subLocationId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      netScore: {
        type: Sequelize.TINYINT,
        allowNull: false
      },
      auditor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      updatedBy: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AURedTagAudits');
  }
};