
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AULibrarySection = db.sequelizeDb2.models.AULibrarySection;

class AULibrarySectionsController extends BaseController {

  constructor() {
    super(AULibrarySection);
  }

}

module.exports = new AULibrarySectionsController();

