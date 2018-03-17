var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');
var User = mongoose.model('User');


    module.exports = {


		findAll(request, response) {
			Survey.find({})
				.populate('_user')
				.then(surveys => response.json(surveys))
				.catch(error => response.status(404).json('error getting the surveys'));
		},
	
		findOne(request, response) {
			console.log('hit server, getting survey')
			console.log(request.params);
	
			Survey.find({_id: request.params.id})
				.then(survey => response.json(survey))
				.catch(error => response.status(404).json('error getting the survey'));
		},
	
		create(request, response) {
			Survey.create(request.body)
				.then(survey => {
					console.log('created survey', survey)
					response.json(survey);
				})
				.catch(error => { 
					console.log('error');
					response.status(400).json('error creating the survey');
				});
					
	
		},
	
		
		delete(request, response) {
			// console.log(request.params);
			Survey.findByIdAndRemove({_id: request.params.id})
				.then(survey => {
					console.log('deleted survey', survey);
					response.json(survey);
				})
				.catch(error => {
					console.log('error')
					response.status(400).json('could not delete')
				});
	
		},
	
		vote(request, response) {
			 console.log(request.params);
			Survey.findByIdAndUpdate({_id: request.params.id}, request.body)
				.then(survey => {
					console.log('updated survey', survey)
				})
				.catch(error => {
					console.log('error')
					response.status(400).json('could not update')
				});
	
		}
	
	
	
	}
