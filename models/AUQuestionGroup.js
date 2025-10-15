'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AUQuestionGroup extends Model {

    static associate(models) {
      AUQuestionGroup.hasMany(models.AUQuestion, {
        foreignKey: 'questionGroupId',
        as: 'questions'
      });
      AUQuestionGroup.hasMany(models.AULocation, {
        foreignKey: 'questionGroupId',
        as: 'locations'
      });
      AUQuestionGroup.hasMany(models.AULocation, {
        foreignKey: 'redTagQuestionGroupId',
        as: 'redTagLocations'
      });
    }
  }
  AUQuestionGroup.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    for: {
      type: DataTypes.STRING
    },
    images: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        const value = this.getDataValue('images');
        return value ? JSON.parse(value) : {};
      },
      set(value) {
        this.setDataValue('images', JSON.stringify(value));
      }
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
    modelName: 'AUQuestionGroup',
  });
  return AUQuestionGroup;
};