'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AUUserMappings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departmentId: {
        type: Sequelize.INTEGER
      },
      shiftId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      locationId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      subLocationId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      employeeCode: {
        type: Sequelize.STRING
      },
      employeeName: {
        type: Sequelize.STRING
      },
      profilePicture: {
        type: Sequelize.STRING,
        allowNull: true
      },
      isRootUser: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      reportTo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdBy: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('AUUserMappings');
  }
};