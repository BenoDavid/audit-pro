
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AULine = db.sequelizeDb2.models.AULine;

class AULinesController extends BaseController {

  constructor() {
    super(AULine);
  }

}

module.exports = new AULinesController();

