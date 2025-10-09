'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AU6SAudit extends Model {

    static associate(models) {

    }
  }
  AU6SAudit.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    shift: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subLocation: {
      type: DataTypes.STRING,
      allowNull: false
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
    modelName: 'AU6SAudits',
  });
  return AU6SAudit;
};