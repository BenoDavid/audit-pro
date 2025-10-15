
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AURedTagAudit = db.sequelizeDb2.models.AURedTagAudit;

class AURedTagAuditsController extends BaseController {

  constructor() {
    super(AURedTagAudit);
  }
  async getById(req, res) {
    try {
      const item = await this.model.findOne({
        where: { id: req.params.id },
        attributes: ["auditor", "createdAt", "netScore", "auditor", "status"],
        include: [
          {
            model: this.model.associations.schedule.target,
            as: 'schedule',
            attributes: ["finalResult"],
            include: [
              {
                model: this.model.associations.schedule.target?.associations?.facility.target,
                as: 'facility',
                attributes: ["name"],
              }
            ],
          },
          {
            model: this.model.associations.location.target,
            as: 'location',
            attributes: ["name", "questionGroupId"],
            include: [
              {
                model: this.model.associations.location.target?.associations?.department.target,
                as: 'department',
                attributes: ["name"],
              },
              {
                model: this.model.associations.location.target?.associations?.questionGroup.target,
                as: 'questionGroup',
                attributes: ["images", "description"],
                include: [
                  {
                    model: this.model.associations.location.target?.associations?.questionGroup.target?.associations?.questions.target,
                    as: 'questions',
                    attributes: ["content"],

                  }]

              }
            ],
          },
          {
            model: this.model.associations.shift.target,
            as: 'shift',
            attributes: ["name"],

          }, {
            model: this.model.associations.finding.target,
            as: 'finding',
            attributes: ["images", "reason"],

          }, {
            model: this.model.associations.correctiveAction.target,
            as: 'correctiveAction',
            attributes: ["images", "message"],

          }
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

module.exports = new AURedTagAuditsController();

