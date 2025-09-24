const AUFacilitiesController = require('../controllers/AUFacilitiesController');
const BaseRouter = require('./BaseRouter');
const AUFacilityRouter = new BaseRouter(AUFacilitiesController);
module.exports = AUFacilityRouter.getRouter();
