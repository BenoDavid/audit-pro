'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AUQuestionGroupLocationMapper extends Model {

    static associate(models) {

    }
  }
  AUQuestionGroupLocationMapper.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'AUQuestionGroupLocationMappers',
  });
  return AUQuestionGroupLocationMapper;
};