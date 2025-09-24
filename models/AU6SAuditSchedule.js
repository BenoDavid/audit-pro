'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AU6SAuditSchedule extends Model {

    static associate(models) {

    }
  }
  AU6SAuditSchedule.init({
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
    modelName: 'AU6SAuditSchedules',
  });
  return AU6SAuditSchedule;
};