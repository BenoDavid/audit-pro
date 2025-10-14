'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AU6SAuditCorrectiveAction extends Model {

    static associate(models) {
      AU6SAuditCorrectiveAction.belongsTo(models.AU6SAudit, {
        foreignKey: 'auditId',
        as: 'audit'
      });
    }
  }
  AU6SAuditCorrectiveAction.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    auditId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        const value = this.getDataValue('images');
        return value ? JSON.parse(value) : {};
      },
      set(value) {
        this.setDataValue('images', JSON.stringify(value));
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    correctedBy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    updatedBy: {
      type: DataTypes.INTEGER,
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
    modelName: 'AU6SAuditCorrectiveAction',
  });
  return AU6SAuditCorrectiveAction;
};