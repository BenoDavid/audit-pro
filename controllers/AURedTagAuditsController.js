
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AURedTagAudit = db.sequelizeDb2.models.AURedTagAudit;

class AURedTagAuditsController extends BaseController {

  constructor() {
    super(AURedTagAudit);
  }

}

module.exports = new AURedTagAuditsController();

