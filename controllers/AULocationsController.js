
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AULocation = db.sequelizeDb2.models.AULocation;

class AULocationsController extends BaseController {

  constructor() {
    super(AULocation);
  }

}

module.exports = new AULocationsController();

