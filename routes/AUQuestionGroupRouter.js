const AUQuestionGroupsController = require('../controllers/AUQuestionGroupsController');
const BaseRouter = require('./BaseRouter');
const AUQuestionGroupRouter = new BaseRouter(AUQuestionGroupsController);
module.exports = AUQuestionGroupRouter.getRouter();
