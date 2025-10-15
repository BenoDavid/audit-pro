
const db = require('../models');
const BaseController = require('./BaseController');
const { AURedTagAuditCorrectiveAction, AURedTagAudit } = db.sequelizeDb2.models;

class AURedTagAuditCorrectiveActionsController extends BaseController {
  constructor() {
    super(AURedTagAuditCorrectiveAction);
  }
  async create(req, res) {
    const t = await this.model.sequelize.transaction(); // Start transaction

    try {
      // 1. Update AURedTagAudit status within the same transaction
      await AURedTagAudit.update(
        { status: "completed" },
        {
          where: { id: req?.body?.auditId },
          transaction: t, // link to transaction
        }
      );

      // 2. Create the new item (model record)
      const item = await this.model.create(req.body, { transaction: t });

      // 3. Commit the transaction
      await t.commit();

      // 4. Send success response
      res.status(200).json({
        status: 200,
        message: `${this.model.name} created successfully`,
        result: item,
      });
    } catch (error) {
      // Rollback all changes if any operation fails
      await t.rollback();

      res.status(500).json({
        status: 500,
        message: error.message,
        result: {},
      });
    }
  }
}
module.exports = new AURedTagAuditCorrectiveActionsController();

