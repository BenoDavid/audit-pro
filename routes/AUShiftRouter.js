const AUShiftsController = require('../controllers/AUShiftsController');
const BaseRouter = require('./BaseRouter');
const AUShiftRouter = new BaseRouter(AUShiftsController);
module.exports = AUShiftRouter.getRouter();
