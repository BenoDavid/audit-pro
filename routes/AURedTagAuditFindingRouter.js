const AURedTagAuditFindingsController = require('../controllers/AURedTagAuditFindingsController');
const BaseRouter = require('./BaseRouter');
const AURedTagAuditFindingRouter = new BaseRouter(AURedTagAuditFindingsController);
module.exports = AURedTagAuditFindingRouter.getRouter();
