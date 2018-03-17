const mongoose = require('mongoose');
 const { Schema } = mongoose;

const SurveySchema = new Schema( {
    question: { type: String,
		         required: true,
		         trim: true,
		         minlength: 8,
            },
    option_1:{ type: String,
		         required: true,
		         trim: true,
                 minlength: 3,
                 votes: [{
                    type: Number,
                    default: 0
                    }]
              },
              vote_1: {
                type: Number,
                default: 0,
            },
            option_2: {
                type: String,
                vote: Number,
                required: true,
                trim: true,
                minlength: 3,
                votes: [{
                    type: Number,
                    default: 0
                }]
            },
            vote_2: {
                type: Number,
                default: 0,
            },
            option_3: {
                type: String,
                vote: Number,
                required: true,
                trim: true,
                minlength: 3,
                votes: [{
                    type: Number,
                    default: 0
                }]
            },
            vote_3: {
                type: Number,
                default: 0,
            },
            option_4: {
                type: String,
                vote: Number,
                required: true,
                trim: true,
                minlength: 3,
                votes: [{
                    type: Number,
                    default: 0
                }]
            },
            vote_4: {
                type: Number,
                default: 0,
            },
        
            _user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
        },{ timestamps: true })
        
        mongoose.model('Survey', SurveySchema);
        // var User = mongoose.model('Survey')