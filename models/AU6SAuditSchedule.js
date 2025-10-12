'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AU6SAuditSchedule extends Model {

    static associate(models) {

      AU6SAuditSchedule.hasMany(models.AU6SAudit, {
        foreignKey: 'scheduleId',
        as: 'audits'
      });
      AU6SAuditSchedule.belongsTo(models.AUFacility, {
        foreignKey: 'facilityId',
        as: 'facility'
      });
    }
  }
  AU6SAuditSchedule.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    facilityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scheduledDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    startedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Not Started"
    },
    scheduledBy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    finalResult: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    completedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdBy: {
      type: DataTypes.STRING
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: true
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
    modelName: 'AU6SAuditSchedule',
  });
  return AU6SAuditSchedule;
};