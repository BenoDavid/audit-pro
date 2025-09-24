
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AURedTagAuditCorrectiveAction = db.sequelizeDb2.models.AURedTagAuditCorrectiveAction;

class AURedTagAuditCorrectiveActionsController extends BaseController {

  constructor() {
    super(AURedTagAuditCorrectiveAction);
  }

}

module.exports = new AURedTagAuditCorrectiveActionsController();

