
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AU6SAuditFinding = db.sequelizeDb2.models.AU6SAuditFinding;

class AU6SAuditFindingsController extends BaseController {

  constructor() {
    super(AU6SAuditFinding);
  }

}

module.exports = new AU6SAuditFindingsController();

