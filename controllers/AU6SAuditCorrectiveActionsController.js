
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AU6SAuditCorrectiveAction = db.sequelizeDb2.models.AU6SAuditCorrectiveAction;

class AU6SAuditCorrectiveActionsController extends BaseController {

  constructor() {
    super(AU6SAuditCorrectiveAction);
  }

}

module.exports = new AU6SAuditCorrectiveActionsController();

