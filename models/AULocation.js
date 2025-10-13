'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AULocation extends Model {

    static associate(models) {
      AULocation.belongsTo(models.AUDepartment, {
        foreignKey: 'departmentId',
        as: 'department'
      });
      AULocation.hasMany(models.AUSubLocation, {
        foreignKey: 'locationId',
        as: 'subLocations'
      });
      AULocation.hasMany(models.AU6SAudit, {
        foreignKey: 'locationId',
        as: 'audits'
      });
    }
  }
  AULocation.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    questionGroupId: {
      type: DataTypes.INTEGER
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    modelName: 'AULocation',
  });
  return AULocation;
};