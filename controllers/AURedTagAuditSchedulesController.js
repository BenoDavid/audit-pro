
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AURedTagAuditSchedule = db.sequelizeDb2.models.AURedTagAuditSchedule;

class AURedTagAuditSchedulesController extends BaseController {

  constructor() {
    super(AURedTagAuditSchedule);
  }

}

module.exports = new AURedTagAuditSchedulesController();

