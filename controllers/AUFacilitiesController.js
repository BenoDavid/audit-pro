
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AUFacility = db.sequelizeDb2.models.AUFacility;

class AUFacilitiesController extends BaseController {

  constructor() {
    console.log(db.sequelizeDb2.models);
    super(AUFacility);
  }

}

module.exports = new AUFacilitiesController();

