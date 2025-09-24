const AU6SAuditCorrectiveActionsController = require('../controllers/AU6SAuditCorrectiveActionsController');
const BaseRouter = require('./BaseRouter');
const AU6SAuditCorrectiveActionRouter = new BaseRouter(AU6SAuditCorrectiveActionsController);
module.exports = AU6SAuditCorrectiveActionRouter.getRouter();
