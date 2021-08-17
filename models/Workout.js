const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        defualt: new Date(new Date().setDate(new Date().getDate()))
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            requried: true,
        },
        name: {
            type: String,
            trim: true,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = { Workout };