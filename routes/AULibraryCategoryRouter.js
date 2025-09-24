const AULibraryCategoriesController = require('../controllers/AULibraryCategoriesController');
const BaseRouter = require('./BaseRouter');
const AULibraryCategoryRouter = new BaseRouter(AULibraryCategoriesController);
module.exports = AULibraryCategoryRouter.getRouter();
