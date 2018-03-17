const mongoose = require('mongoose');
 const { Schema } = mongoose;

const SurveySchema = new Schema( {
    question: { type: String,
		         required: true,
		         trim: true,
		         minlength: 8,
            },
    option1:{ type: String,
		         required: true,
		         trim: true,
                 minlength: 3,
                votes: {
                type: Number,
                default: 0
                }
            },
            option2: {
                type: String,
		         required: true,
		         trim: true,
                 minlength: 3,
                votes: {
                type: Number,
                default: 0
                }
            },
            
            option3: {
                type: String,
		         required: true,
		         trim: true,
                 minlength: 3,
                votes: {
                type: Number,
                default: 0
                }
            },
            
            option4: {
                type: String,
                required: true,
		         trim: true,
                 minlength: 3,
                votes: {
                type: Number,
                default: 0
                }
            },
            
        
        _user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
        },{ timestamps: true })
        
        mongoose.model('Survey', SurveySchema);
        