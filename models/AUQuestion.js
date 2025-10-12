'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AUQuestion extends Model {

    static associate(models) {
      AUQuestion.belongsTo(models.AUQuestionGroup, {
        foreignKey: 'questionGroupId',
        as: 'questionGroup'
      });
    }
  }
  AUQuestion.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    questionGroupId: {
      type: DataTypes.INTEGER
    },
    content: {
      type: DataTypes.STRING
    },
    images: {
      type: DataTypes.STRING,
      allowNull: true
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
    modelName: 'AUQuestion',
  });
  return AUQuestion;
};