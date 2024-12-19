const mongoose =require('mongoose');

const ProgramSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true }, 
    difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
    exercises: [
        {
            name: { type: String, required: true },
            sets: { type: Number, required: true },
            reps: { type: Number, required: true },
            rest: { type: Number }, 
        }
    ],



})

module.exports = mongoose.model('programSchema', ProgramSchema);