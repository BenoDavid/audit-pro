
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AUSubLocation = db.sequelizeDb2.models.AUSubLocation;

class AUSubLocationsController extends BaseController {

  constructor() {
    super(AUSubLocation);
  }

}

module.exports = new AUSubLocationsController();

