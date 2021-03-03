const router = require('express').Router();
let RecipeID = require('../models/recipeID.model');

router.route('/').get((req, res) => {
    RecipeID.find()
        .then(recipeID => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

