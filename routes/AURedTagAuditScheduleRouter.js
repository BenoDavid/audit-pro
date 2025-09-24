const AURedTagAuditSchedulesController = require('../controllers/AURedTagAuditSchedulesController');
const BaseRouter = require('./BaseRouter');
const AURedTagAuditScheduleRouter = new BaseRouter(AURedTagAuditSchedulesController);
module.exports = AURedTagAuditScheduleRouter.getRouter();
