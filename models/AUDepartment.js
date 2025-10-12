'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AUDepartment extends Model {

    static associate(models) {
      AUDepartment.hasMany(models.AU6SAuditSchedule, {
        foreignKey: 'departmentId',
        as: 'schedules'
      });
      AUDepartment.hasMany(models.AULocation, {
        foreignKey: 'departmentId',
        as: 'locations'
      });
    }
  }
  AUDepartment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    facilityId: {
      type: DataTypes.INTEGER
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
    modelName: 'AUDepartment',
  });
  return AUDepartment;
};