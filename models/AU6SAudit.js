'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AU6SAudit extends Model {

    static associate(models) {
      AU6SAudit.belongsTo(models.AULine, {
        foreignKey: 'lineId',
        as: 'line'
      });
      AU6SAudit.belongsTo(models.AU6SAuditSchedule, {
        foreignKey: 'scheduleId',
        as: 'schedule'
      });
      AU6SAudit.belongsTo(models.AULocation, {
        foreignKey: 'locationId',
        as: 'location'
      });
      AU6SAudit.belongsTo(models.AUShift, {
        foreignKey: 'shiftId',
        as: 'shift'
      });
      AU6SAudit.hasOne(models.AU6SAuditFinding, {
        foreignKey: 'auditId',
        as: 'finding'
      });
      AU6SAudit.hasOne(models.AU6SAuditCorrectiveAction, {
        foreignKey: 'auditId',
        as: 'correctiveAction'
      });
    }
  }
  AU6SAudit.init({
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
    safety: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sort: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    setInOrder: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    shine: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    standardize: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sustain: {
      type: DataTypes.TINYINT,
      allowNull: false
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
    modelName: 'AU6SAudit',
  });
  return AU6SAudit;
};