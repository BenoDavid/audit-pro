'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AURedTagAuditFinding extends Model {

    static associate(models) {

    }
  }
  AURedTagAuditFinding.init({
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
    modelName: 'AURedTagAuditFindings',
  });
  return AURedTagAuditFinding;
};