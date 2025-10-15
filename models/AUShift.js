'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AUShift extends Model {

    static associate(models) {
      AUShift.belongsTo(models.AUFacility, {
        foreignKey: 'facilityId',
        as: 'facility'
      });
      AUShift.hasMany(models.AU6SAudit, {
        foreignKey: 'shiftId',
        as: 'audits'
      });
      AUShift.hasMany(models.AURedTagAudit, {
        foreignKey: 'shiftId',
        as: 'redTagAudits'
      });
    }
  }
  AUShift.init({
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
    startTime: {
      allowNull: true,
      type: DataTypes.TIME
    },
    endTime: {
      allowNull: true,
      type: DataTypes.TIME
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
    modelName: 'AUShift',
  });
  return AUShift;
};