const AUQuestionGroupLocationMappersController = require('../controllers/AUQuestionGroupLocationMappersController');
const BaseRouter = require('./BaseRouter');
const AUQuestionGroupLocationMapperRouter = new BaseRouter(AUQuestionGroupLocationMappersController);
module.exports = AUQuestionGroupLocationMapperRouter.getRouter();
