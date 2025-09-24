const AUUserMappingsController = require('../controllers/AUUserMappingsController');
const BaseRouter = require('./BaseRouter');
const AUUserMappingRouter = new BaseRouter(AUUserMappingsController);
module.exports = AUUserMappingRouter.getRouter();
