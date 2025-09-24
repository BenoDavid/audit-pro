const AUDepartmentsController = require('../controllers/AUDepartmentsController');
const BaseRouter = require('./BaseRouter');
const AUDepartmentRouter = new BaseRouter(AUDepartmentsController);
module.exports = AUDepartmentRouter.getRouter();
