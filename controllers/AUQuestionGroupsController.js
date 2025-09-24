
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AUQuestionGroup = db.sequelizeDb2.models.AUQuestionGroup;

class AUQuestionGroupsController extends BaseController {

  constructor() {
    super(AUQuestionGroup);
  }

}

module.exports = new AUQuestionGroupsController();

