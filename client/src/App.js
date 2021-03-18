import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import Recipe from './Recipe';
import Sidebar from './Components/Sidebar';


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
    {/* 
      This map runs through the entire foodlist we got from above and then
      displays every single variable we call
      */
    }
      <Sidebar/>
      <div className = "recipes">
      {foodList.map((val, key) => (
        <Recipe
        key={val.id}
        title={val.name}
        calories={val.calories}
        image={val.imageURL}
        ingredients={val.ingredients}
        recipeURL={val.recipeURL}
        />
      )

        )};
      </div>
    </div>
  );
}

export default App;
