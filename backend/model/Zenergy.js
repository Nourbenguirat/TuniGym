const mongoose = require('mongoose');

const zenergySchema = mongoose.Schema({
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    program: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
    weight: { type: Number, required: true }, 
    carbs: { type: Number, required: true }, 
    protein: { type: Number, required: true },
    creatine: { type: Number, required: true },
    eggs: { type: Number, required: true }, 
    chicken: { type: Number, required: true }, 
    meal: { type: String, required: true }, 
    calculatedAt: { type: Date, default: Date.now }, 

})

module.exports = mongoose.model('zenergySchema',zenergySchema);