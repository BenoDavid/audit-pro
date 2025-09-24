
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AUShift = db.sequelizeDb2.models.AUShift;

class AUShiftsController extends BaseController {

  constructor() {
    super(AUShift);
  }

}

module.exports = new AUShiftsController();

