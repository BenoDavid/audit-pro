const AU6SAuditSchedulesController = require('../controllers/AU6SAuditSchedulesController');
const BaseRouter = require('./BaseRouter');
const AU6SAuditScheduleRouter = new BaseRouter(AU6SAuditSchedulesController);
module.exports = AU6SAuditScheduleRouter.getRouter();
