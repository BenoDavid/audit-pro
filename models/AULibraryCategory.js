'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AULibraryCategory extends Model {

    static associate(models) {

    }
  }
  AULibraryCategory.init({
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
    modelName: 'AULibraryCategories',
  });
  return AULibraryCategory;
};