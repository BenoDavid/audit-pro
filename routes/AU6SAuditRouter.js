const AU6SAuditsController = require('../controllers/AU6SAuditsController');
const BaseRouter = require('./BaseRouter');
const AU6SAuditRouter = new BaseRouter(AU6SAuditsController);
module.exports = AU6SAuditRouter.getRouter();
