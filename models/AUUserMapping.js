'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AUUserMapping extends Model {

    static associate(models) {

    }
  }
  AUUserMapping.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    departmentId: {
      type: DataTypes.INTEGER
    },
    shiftId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subLocationId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    employeeCode: {
      type: DataTypes.STRING
    },
    employeeName: {
      type: DataTypes.STRING
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isRootUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    reportTo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdBy: {
      type: DataTypes.STRING
    },
    updatedBy: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }

  }, {
    sequelize,
    modelName: 'AUUserMapping',
  });
  return AUUserMapping;
};