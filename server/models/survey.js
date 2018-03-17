const mongoose = require('mongoose');
 const { Schema } = mongoose;

const SurveySchema = new Schema( {
    question: { type: String,
		         required: true,
		         trim: true,
		         minlength: 8,
            },
    option1:{   value: { type: String,
                 required: true,
		         trim: true,
                 minlength: 3,
                 default:""
                 }
                ,
                votes: {
                type: Number,
                default: 0
                }
            },
            option2:{   value: { type: String,
                required: true,
                trim: true,
                minlength: 3,
                default:""
                }
               ,
               votes: {
               type: Number,
               default: 0
               }
           },
            
           option3:{   value: { type: String,
            required: true,
            trim: true,
            minlength: 3,
            default:""
            }
           ,
           votes: {
           type: Number,
           default: 0
           }
       },
       option4:{   value: { type: String,
        required: true,
        trim: true,
        minlength: 3,
        default:""
        }
       ,
       votes: {
       type: Number,
       default: 0
       }
   },
            
            
        
        _user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
        },{ timestamps: true })
        
        mongoose.model('Survey', SurveySchema);
        