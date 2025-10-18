'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AUFacility extends Model {

    static associate(models) {

      AUFacility.hasMany(models.AU6SAuditSchedule, {
        foreignKey: 'facilityId',
        as: 'schedules'
      });
      AUFacility.hasMany(models.AURedTagAuditSchedule, {
        foreignKey: 'facilityId',
        as: 'redTagSchedules'
      });
      AUFacility.hasMany(models.AUShift, {
        foreignKey: 'facilityId',
        as: 'shifts'
      });
      AUFacility.hasMany(models.AULine, {
        foreignKey: 'facilityId',
        as: 'lines'
      });
    }
  }
  AUFacility.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    status: {
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
    modelName: 'AUFacility',
  });
  return AUFacility;
};