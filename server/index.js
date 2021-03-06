const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const FoodModel = require('./models/Food');

app.use(express.json());
app.use(cors());

//Connects to the actualy MongoDB server
//user acocunt is 'user' 'pass' and the db is 'food'
mongoose.connect(
    'mongodb+srv://user:Password1@crud.qxdlp.mongodb.net/food?retryWrites=true&w=majority', 
    {
    useNewURLParser: true,
    }
);

/*
If we want to add foods to our databases we can use this post method
app.post("/insert", async (req, res) => {
    const foodName = req.body.foodName;
    const days = req.body.days;    

    const food = new FoodModel({ foodName: foodName, daysSinceIAte: days });

try{
    await food.save();
    res.send("inserted Data");
}catch(err) {
    console.log(err);
}
});

*/

/*  If we want to only pull specefics such as only an item with the name pizza dough
    we would replace the {} after 'find' with the below line
    {name: "Pizza Dough"}
    This looks for anything in the name column of the DB with "Pizza Dough"
    May come in handy with sorting 
*/
app.get("/read", async (req, res) => {

    //FoodModel is created from the outline in the schema ./models/food.js
    //It is insiated at the top of the class so we can use the schema to pull the data
    FoodModel.find({}, (err,result) => {
        if (err) {
            res.send(err);
        }
        
        res.send(result);
    });  
});

app.listen(3001, () =>{
    console.log("Server is running on port 3001...")
});

