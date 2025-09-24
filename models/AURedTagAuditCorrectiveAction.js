'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AURedTagAuditCorrectiveAction extends Model {

    static associate(models) {

    }
  }
  AURedTagAuditCorrectiveAction.init({
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
    modelName: 'AURedTagAuditCorrectiveActions',
  });
  return AURedTagAuditCorrectiveAction;
};