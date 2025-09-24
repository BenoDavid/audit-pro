const express = require('express');
const router = express.Router();

const AU6SAuditCorrectiveActionRouter = require('./AU6SAuditCorrectiveActionRouter');
const AU6SAuditFindingRouter = require('./AU6SAuditFindingRouter');
const AU6SAuditRouter = require('./AU6SAuditRouter');
const AU6SAuditScheduleRouter = require('./AU6SAuditScheduleRouter');
const AUDepartmentRouter = require('./AUDepartmentRouter');
const AUFacilityRouter = require('./AUFacilityRouter');
const AULibraryCategoryRouter = require('./AULibraryCategoryRouter');
const AULibrarySectionRouter = require('./AULibrarySectionRouter');
const AULocationRouter = require('./AULocationRouter');
const AUQuestionGroupLocationMapperRouter = require('./AUQuestionGroupLocationMapperRouter');
const AUQuestionGroupRouter = require('./AUQuestionGroupRouter');
const AUQuestionRouter = require('./AUQuestionRouter');
const AURedTagAuditCorrectiveActionRouter = require('./AURedTagAuditCorrectiveActionRouter');
const AURedTagAuditFindingRouter = require('./AURedTagAuditFindingRouter');
const AURedTagAuditRouter = require('./AURedTagAuditRouter');
const AURedTagAuditScheduleRouter = require('./AURedTagAuditScheduleRouter');
const AUShiftRouter = require('./AUShiftRouter');
const AUSubLocationRouter = require('./AUSubLocationRouter');
const AUUserMappingRouter = require('./AUUserMappingRouter');


// // Use routes
router.use('/AU6SAuditCorrectiveActionRouter', AU6SAuditCorrectiveActionRouter);
router.use('/AU6SAuditFindingRouter', AU6SAuditFindingRouter);
router.use('/AU6SAuditRouter', AU6SAuditRouter);
router.use('/AU6SAuditScheduleRouter', AU6SAuditScheduleRouter);
router.use('/AUDepartmentRouter', AUDepartmentRouter);
router.use('/AUFacilityRouter', AUFacilityRouter);
router.use('/AULibraryCategoryRouter', AULibraryCategoryRouter);
router.use('/AULibrarySectionRouter', AULibrarySectionRouter);
router.use('/AULocationRouter', AULocationRouter);
router.use('/AUQuestionGroupLocationMapperRouter', AUQuestionGroupLocationMapperRouter);
router.use('/AUQuestionGroupRouter', AUQuestionGroupRouter);
router.use('/AUQuestionRouter', AUQuestionRouter);
router.use('/AURedTagAuditCorrectiveActionRouter', AURedTagAuditCorrectiveActionRouter);
router.use('/AURedTagAuditFindingRouter', AURedTagAuditFindingRouter);
router.use('/AURedTagAuditRouter', AURedTagAuditRouter);
router.use('/AURedTagAuditScheduleRouter', AURedTagAuditScheduleRouter);
router.use('/AUShiftRouter', AUShiftRouter);
router.use('/AUSubLocationRouter', AUSubLocationRouter);
router.use('/AUUserMappingRouter', AUUserMappingRouter);


module.exports = router;


