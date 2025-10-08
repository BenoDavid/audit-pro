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
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    employeeCode: {
      type: DataTypes.STRING
    },
    profilePicture: {
      type: DataTypes.STRING
    },
    belongsTo: {
      type: DataTypes.STRING
    },
    createdBy: {
      type: DataTypes.STRING
    },
    updatedBy:{
      type:DataTypes.STRING
      },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE},
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE}

  }, {
    sequelize,
    modelName: 'AUUserMappings',
  });
  return AUUserMapping;
};