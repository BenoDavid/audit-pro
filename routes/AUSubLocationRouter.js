const AUSubLocationsController = require('../controllers/AUSubLocationsController');
const BaseRouter = require('./BaseRouter');
const AUSubLocationRouter = new BaseRouter(AUSubLocationsController);
module.exports = AUSubLocationRouter.getRouter();
