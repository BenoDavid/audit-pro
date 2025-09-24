
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AUFacility = db.sequelizeDb2.models.AUFacility;

class AUFacilitiesController extends BaseController {

  constructor() {
    super(AUFacility);
  }

}

module.exports = new AUFacilitiesController();

