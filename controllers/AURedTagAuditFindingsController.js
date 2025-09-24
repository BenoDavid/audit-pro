
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AURedTagAuditFinding = db.sequelizeDb2.models.AURedTagAuditFinding;

class AURedTagAuditFindingsController extends BaseController {

  constructor() {
    super(AURedTagAuditFinding);
  }

}

module.exports = new AURedTagAuditFindingsController();

