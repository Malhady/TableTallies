import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';

function App() {
  /*
   foodName:{
        type: String,
        required:true,
    },
    daysSinceIAte:{
        type: Number,
        required: true,
    },
  */

  
  const [foodList, setFoodList] = useState([]);

  useEffect(() =>{
    Axios.get('http://localhost:3001/read').then((response) => {
      setFoodList(response.data);
  });
  }, []);

  return (
    
    <div className="App">
      <h1> DISPLAY MONGO DATA</h1>

      {foodList.map((val, key) => {
        return ( 
          <div key={key}> 
          <h1>ID: {val.id}</h1> 
          <h3>Name of Dish: {val.name}</h3>
          <h4>Webpage With Recipe: {val.sourceWebPage}</h4>
          <p>Calorie Count: {val.calories}</p>
          <p>Health Labels: {val.healthLabels}</p>
          <p>Time to cook: {val.totalTime}</p>
          
          {/* href dont work when set to a variable
              Need to figure a way around it*/}
          <a href= {val.recipeURL}> 
          <img src = {val.imageURL} alt = "food item"/> 
          </a>
          
          </div>

          );
        })};

    </div>
  );
}

export default App;
