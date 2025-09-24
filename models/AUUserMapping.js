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

    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'AUUserMappings',
  });
  return AUUserMapping;
};