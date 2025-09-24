'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AURedTagAuditSchedule extends Model {

    static associate(models) {

    }
  }
  AURedTagAuditSchedule.init({
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
    modelName: 'AURedTagAuditSchedules',
  });
  return AURedTagAuditSchedule;
};