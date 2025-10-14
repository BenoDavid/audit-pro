'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AURedTagAuditFinding extends Model {

    static associate(models) {
      AURedTagAuditFinding.belongsTo(models.AURedTagAudit, {
        foreignKey: 'auditId',
        as: 'audit'
      });
    }
  }
  AURedTagAuditFinding.init({
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
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    findingBy: {
      type: DataTypes.STRING,
      allowNull: false
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
    modelName: 'AURedTagAuditFinding',
  });
  return AURedTagAuditFinding;
};