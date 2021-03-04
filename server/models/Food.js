/*
    This class is how we pull in the mongoDB data
    and the way it is read from the server. This outlines
    how the data comes in
*/
const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    _id:{
        type: Object,
        required:false
    },
    id:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    imageURL:{
        type: String,
        required:false
    },
    totalTime:{
        type: Number,
        required:false
    },
    recipeURL:{
        type: String,
        required:true
    },
    calories:{
        type: Number,
        required:false
    },
    healthLabels:{
        type: Array,
        required:false
    },
    sourceWebPage:{
        type: String,
        required:false
    },
    ingredients:{
        type: Array,
        required:false
    },
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;