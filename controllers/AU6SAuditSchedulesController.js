
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AU6SAuditSchedule = db.sequelizeDb2.models.AU6SAuditSchedule;

class AU6SAuditSchedulesController extends BaseController {

  constructor() {
    super(AU6SAuditSchedule);
  }

}

module.exports = new AU6SAuditSchedulesController();

