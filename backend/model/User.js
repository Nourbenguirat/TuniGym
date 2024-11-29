const mongoose = require('mongoose');

const  UserSchema = mongoose.Schema({
     name:{type:String,required: true},
     age:{type:Number,required: true},
     gender:{type:String, enum:['Male','Female'], required:true},
     weight: {type:Number,required:true},
     height :{type:Number,required:true},
     email:{type:String,required:true,unique:true},
     phone:{type:String},
     program:{type:mongoose.Schema.Types.ObjectId,ref:'Program'},
     progression:{type:Number,default:0},
     activities: {
        percentage: { type: Number, required: true, min: 0, max: 100 }, // Pourcentage des activités
        activityLevel: { 
            type: String, 
            enum: ['None or Mismatched', 'Normal', 'Too Much'], 
            default: 'None or Mismatched' 
        },
    },
    diseases: {
        hasDisease: { type: Boolean, required: true },
        doctor: {
            name: { type: String },
            contact: { type: String },
            description:{type:String}
        }
    }
});

// Middleware pour définir automatiquement le niveau d'activité en fonction du pourcentage
UserSchema.pre('save', function(next) {
    if (this.activities.percentage < 40) {
        this.activities.activityLevel = 'None or Mismatched';
    } else if (this.activities.percentage >= 40 && this.activities.percentage <= 60) {
        this.activities.activityLevel = 'Normal';
    } else {
        this.activities.activityLevel = 'Too Much';
    }
    next();
});

module.exports = mongoose.model('userSchemas',UserSchema);