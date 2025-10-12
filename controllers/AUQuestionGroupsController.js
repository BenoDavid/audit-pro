
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AUQuestionGroup = db.sequelizeDb2.models.AUQuestionGroup;

class AUQuestionGroupsController extends BaseController {

  constructor() {
    super(AUQuestionGroup);
  }
  async getById(req, res) {
    try {
      const item = await this.model.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: this.model.associations.questions.target,
            as: 'questions',
          },

        ],
      });

      if (item) {
        res.status(200).json({
          status: 200,
          message: `${this.model.name}s fetched successfully`,
          result: item,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
        result: {},
      });
    }
  }
}

module.exports = new AUQuestionGroupsController();

