
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AULibraryCategory = db.sequelizeDb2.models.AULibraryCategory;

class AULibraryCategoriesController extends BaseController {

  constructor() {
    super(AULibraryCategory);
  }

}

module.exports = new AULibraryCategoriesController();

