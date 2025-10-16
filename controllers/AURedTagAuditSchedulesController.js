
//test purpose
const db = require('../models');
const BaseController = require('./BaseController');
const AURedTagAuditSchedule = db.sequelizeDb2.models.AURedTagAuditSchedule;

class AURedTagAuditSchedulesController extends BaseController {

  constructor() {
    super(AURedTagAuditSchedule);
  }
  async getById(req, res) {
    try {
      const item = await this.model.findOne({
        where: { id: req.params.id },
        attributes: ["id", "title", "scheduledDate", "status", "scheduledBy", "createdBy"],
        include: [
          {
            model: this.model.associations.redTagAudits.target,
            as: 'redTagAudits',
            include: [{
              model: this.model.associations.redTagAudits.target?.associations.location.target,
              as: 'location',
              attributes: ["name"],
            }]
          },
          {
            model: this.model.associations.facility.target,
            as: 'facility',
            attributes: ["id", "name"],
            include: [{
              model: this.model.associations.facility.target?.associations.shifts.target,
              as: 'shifts',
              attributes: ["id", "name"],
            }]
          },
          {
            model: this.model.associations.department.target,
            as: 'department',
            attributes: ["id", "name"],
            include: [{
              model: this.model.associations.department.target?.associations.locations.target,
              as: 'locations',
              attributes: ["id", "name", "questionGroupId", "redTagQuestionGroupId", "isLineWiseAudit"],
              include: [{
                model: this.model.associations.department.target?.associations.locations.target?.associations.subLocations?.target,
                as: 'subLocations',
                attributes: ["id", "name"],
              }]
            }]
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

module.exports = new AURedTagAuditSchedulesController();

