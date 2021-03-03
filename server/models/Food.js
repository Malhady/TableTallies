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
    totaltime:{
        type: Number,
        required:false
    },
    recipeURL:{
        type: Number,
        required:false
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