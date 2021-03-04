import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';

/*To run the application:
  Open two terminals
  in term one: 
  cd server
  node index.js

  in term two: 
  cd client 
  npm start
  Wait, it should open google chrome with the client application
*/

function App() {
  //iniates the foodlist that we will use down below to get the data from localhost:3001/read
  const [foodList, setFoodList] = useState([]);

  //Uses Axios to read the data from the server file located at 3001/read
  //and then sets the foodlist equal to that data
  useEffect(() =>{
    Axios.get('http://localhost:3001/read').then((response) => {
      setFoodList(response.data);
  });
  }, []);

  return (

    //This is what shows up on the react client page
    
    <div className="App">
      <h1> DISPLAYED MONGO DATA</h1>

    {/* 
      This map runs through the entire foodlist we got from above and then
      displays every single variable we call
      */
    }
      {foodList.map((val, key) => {
        return ( 
          <div className ="recipes" key={key}> 
            <h1>ID: {val.id}</h1> 
            <h3>Name of Dish: {val.name}</h3>
            <h4>Webpage With Recipe: {val.sourceWebPage}</h4>
            <p>Calorie Count: {val.calories}</p>
            <p id="hello">Health Labels: {val.healthLabels}</p>
            <p>Time to cook: {val.totalTime}</p>
          
            {/*
              Adds the link to the recipe embedded into the image
            */}
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
