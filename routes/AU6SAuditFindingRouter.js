const AU6SAuditFindingsController = require('../controllers/AU6SAuditFindingsController');
const BaseRouter = require('./BaseRouter');
const AU6SAuditFindingRouter = new BaseRouter(AU6SAuditFindingsController);
module.exports = AU6SAuditFindingRouter.getRouter();
