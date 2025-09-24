const AULibrarySectionsController = require('../controllers/AULibrarySectionsController');
const BaseRouter = require('./BaseRouter');
const AULibrarySectionRouter = new BaseRouter(AULibrarySectionsController);
module.exports = AULibrarySectionRouter.getRouter();
