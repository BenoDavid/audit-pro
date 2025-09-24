const AURedTagAuditCorrectiveActionsController = require('../controllers/AURedTagAuditCorrectiveActionsController');
const BaseRouter = require('./BaseRouter');
const AURedTagAuditCorrectiveActionRouter = new BaseRouter(AURedTagAuditCorrectiveActionsController);
module.exports = AURedTagAuditCorrectiveActionRouter.getRouter();
