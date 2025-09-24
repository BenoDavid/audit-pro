'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AULibrarySection extends Model {

    static associate(models) {

    }
  }
  AULibrarySection.init({
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
    modelName: 'AULibrarySections',
  });
  return AULibrarySection;
};