const AULocationsController = require('../controllers/AULocationsController');
const BaseRouter = require('./BaseRouter');
const AULocationRouter = new BaseRouter(AULocationsController);
module.exports = AULocationRouter.getRouter();
