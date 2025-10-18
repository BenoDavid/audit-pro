'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AURedTagAudit extends Model {

    static associate(models) {
      AURedTagAudit.belongsTo(models.AURedTagAuditSchedule, {
        foreignKey: 'scheduleId',
        as: 'schedule'
      });
      AURedTagAudit.belongsTo(models.AULocation, {
        foreignKey: 'locationId',
        as: 'location'
      });
      AURedTagAudit.belongsTo(models.AUShift, {
        foreignKey: 'shiftId',
        as: 'shift'
      });
      AURedTagAudit.hasOne(models.AURedTagAuditFinding, {
        foreignKey: 'auditId',
        as: 'finding'
      });
      AURedTagAudit.hasOne(models.AURedTagAuditCorrectiveAction, {
        foreignKey: 'auditId',
        as: 'correctiveAction'
      });
    }
  }
  AURedTagAudit.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    scheduleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shiftId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    locationId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subLocationId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lineId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    netScore: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    auditor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
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
    modelName: 'AURedTagAudit',
  });
  return AURedTagAudit;
};