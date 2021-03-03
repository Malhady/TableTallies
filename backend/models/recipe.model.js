const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    recipe: {
        id : {type : Number, required : true},
        name : {type : String, required : true},
        imageURL : {type : String, required : true},
        totalTime : {type : Number, required : true},
        recipeURL : {type : String, required : true},
        calories : {type : Number, required : true},
        healthLabels : {type : Array, required : true},
        sourceWebpage : {type : String, required : true},
        ingredients : {type : Array, required : true}
    },
},{
    timestamps : true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;