const router = require('express').Router();
const surveyController = require("./../../controllers/surveys");


module.exports = router
	.get('api/survey/', surveyController.findAll)
	.post('api/survey/', surveyController.create)
	.get('api/survey/:id', surveyController.findOne)
	.post('api/survey/:id', surveyController.vote)
	.delete('api/survey/:id', surveyController.delete);