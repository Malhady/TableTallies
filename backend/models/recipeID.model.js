const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeIDSchema = new Schema({
    recipeID: {
        type : String,
        required : true,
        unique : false,
        trim : true,
        minlength : 3
    },
},{
    timestamps : true,
});

const RecipeID = mongoose.model('RecipeID', recipeIDSchema);

module.exports = RecipeID;