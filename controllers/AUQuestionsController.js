
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AUQuestion = db.sequelizeDb2.models.AUQuestion;

class AUQuestionsController extends BaseController {

  constructor() {
    super(AUQuestion);
  }

}

module.exports = new AUQuestionsController();

