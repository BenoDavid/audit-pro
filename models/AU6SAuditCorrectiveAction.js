'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AU6SAuditCorrectiveAction extends Model {

    static associate(models) {

    }
  }
  AU6SAuditCorrectiveAction.init({
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
    modelName: 'AU6SAuditCorrectiveActions',
  });
  return AU6SAuditCorrectiveAction;
};