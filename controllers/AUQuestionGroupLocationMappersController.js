
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AUQuestionGroupLocationMapper = db.sequelizeDb2.models.AUQuestionGroupLocationMapper;

class AUQuestionGroupLocationMappersController extends BaseController {

  constructor() {
    super(AUQuestionGroupLocationMapper);
  }

}

module.exports = new AUQuestionGroupLocationMappersController();

