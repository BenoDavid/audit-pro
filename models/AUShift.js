'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AUShift extends Model {

    static associate(models) {

    }
  }
  AUShift.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
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
    updatedBy:{
      type:DataTypes.STRING
      },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE},
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE}

  }, {
    sequelize,
    modelName: 'AUShifts',
  });
  return AUShift;
};