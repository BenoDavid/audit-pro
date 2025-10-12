
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AU6SAuditSchedule = db.sequelizeDb2.models.AU6SAuditSchedule;

class AU6SAuditSchedulesController extends BaseController {

  constructor() {
    super(AU6SAuditSchedule);
  }
  async getById(req, res) {
    try {
      const item = await this.model.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: this.model.associations.audits.target,
            as: 'audits',
          },
          {
            model: this.model.associations.facility.target,
            as: 'facility',
            attributes: ["name"],

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

module.exports = new AU6SAuditSchedulesController();

