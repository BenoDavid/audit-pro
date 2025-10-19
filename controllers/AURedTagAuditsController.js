
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
        attributes: ["auditor", "lineId", "createdAt", "netScore", "auditor", "status"],
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
            attributes: ["name", "questionGroupId", "redTagQuestionGroupId"],
            include: [
              {
                model: this.model.associations.location.target?.associations?.department.target,
                as: 'department',
                attributes: ["name"],
              },
              {
                model: this.model.associations.location.target?.associations?.redTagQuestionGroup.target,
                as: 'redTagQuestionGroup',
                attributes: ["images", "description"],
                include: [
                  {
                    model: this.model.associations.location.target?.associations?.redTagQuestionGroup.target?.associations?.questions.target,
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
  async getAll(req, res) {
    try {
      // Extract query parameters for pagination, filtering, and sorting
      const { fromDate, toDate, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'DESC', ...filters } = req.query;

      // Set up pagination
      const offset = (page - 1) * limit;
      const paginationOptions = { offset: parseInt(offset), limit: parseInt(limit) };

      // Set up sorting
      const sortOptions = [[sortBy, sortOrder.toUpperCase()]];

      // Set up filtering
      const filterOptions = {};
      for (const key in filters) {
        filterOptions[key] = filters[key];
      }
      if (fromDate && toDate) {
        const startDate = new Date(fromDate);
        const endDate = new Date(toDate);

        // Adjust endDate to include the entire day
        endDate.setHours(23, 59, 59, 999);

        filterOptions.createdAt = {
          [Sequelize.Op.between]: [startDate, endDate],
        };
      }
      // Combine all options and fetch data
      const items = await this.model.findAndCountAll({
        where: filterOptions,
        order: sortOptions,
        include: [{
          model: this.model.associations.location.target,
          as: 'location',
          attributes: ["name"],
        }, {
          model: this.model.associations.line.target,
          as: 'line',
          attributes: ["name"],
        }]
        // ...paginationOptions
      });

      // Respond with paginated data and metadata
      res.status(200).json({
        status: 200,
        message: `${this.model.name}s fetched successfully`,
        result: items.rows,
        pagination: {
          totalItems: items.count,
          totalPages: Math.ceil(items.count / limit),
          currentPage: parseInt(page),
          pageSize: parseInt(limit)
        }
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
        result: [],
      });
    }
  }
}

module.exports = new AURedTagAuditsController();

