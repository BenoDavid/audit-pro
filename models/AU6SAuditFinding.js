'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AU6SAuditFinding extends Model {

    static associate(models) {

    }
  }
  AU6SAuditFinding.init({
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
    modelName: 'AU6SAuditFindings',
  });
  return AU6SAuditFinding;
};