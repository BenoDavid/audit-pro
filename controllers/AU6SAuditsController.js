
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AU6SAudit = db.sequelizeDb2.models.AU6SAudit;

class AU6SAuditsController extends BaseController {

  constructor() {
    super(AU6SAudit);
  }

}

module.exports = new AU6SAuditsController();

