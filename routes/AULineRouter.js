const AULinesController = require('../controllers/AULinesController');
const BaseRouter = require('./BaseRouter');
const AULineRouter = new BaseRouter(AULinesController);
module.exports = AULineRouter.getRouter();
