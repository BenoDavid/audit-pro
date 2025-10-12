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
    employeeCode: {
      type: DataTypes.STRING
    },
    employeeName: {
      type: DataTypes.STRING
    },
    profilePicture: {
      type: DataTypes.STRING
    },
    belongsTo: {
      type: DataTypes.STRING
    },
    createdBy: {
      type: DataTypes.INTEGER
    },
    updatedBy: {
      type: DataTypes.INTEGER
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