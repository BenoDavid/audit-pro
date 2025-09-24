
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AUDepartment = db.sequelizeDb2.models.AUDepartment;

class AUDepartmentsController extends BaseController {

  constructor() {
    super(AUDepartment);
  }

}

module.exports = new AUDepartmentsController();

