const AURedTagAuditsController = require('../controllers/AURedTagAuditsController');
const BaseRouter = require('./BaseRouter');
const AURedTagAuditRouter = new BaseRouter(AURedTagAuditsController);
module.exports = AURedTagAuditRouter.getRouter();
