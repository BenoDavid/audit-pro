const AUQuestionsController = require('../controllers/AUQuestionsController');
const BaseRouter = require('./BaseRouter');
const AUQuestionRouter = new BaseRouter(AUQuestionsController);
module.exports = AUQuestionRouter.getRouter();
