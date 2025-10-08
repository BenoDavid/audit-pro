'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AUQuestion extends Model {

    static associate(models) {

    }
  }
  AUQuestion.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    content: {
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
    modelName: 'AUQuestions',
  });
  return AUQuestion;
};