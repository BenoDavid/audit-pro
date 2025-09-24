
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AUUserMapping = db.sequelizeDb2.models.AUUserMapping;

class AUUserMappingsController extends BaseController {

  constructor() {
    super(AUUserMapping);
  }

}

module.exports = new AUUserMappingsController();

