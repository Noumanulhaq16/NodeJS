import mongoose from "mongoose";

// Defining Schema

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 65 },
    fees: { type: mongoose.Decimal128, required: true, validate: v => v <= 5500.55 },
    hobbies: { type: Array },
    isactive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }
})

// console.log(StudentSchema.path('age'))
// Compiling Schema
const StudenModel = mongoose.model('student',StudentSchema);
