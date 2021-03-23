import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import Recipe from './Components/Recipe';
import Sidebar from './Components/Sidebar';
import Recipes from './Components/Recipes';
import Navbar from './Components/Navbar';


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
  return (

    //This is what shows up on the react client page
    
    <div className="App">
    {/* 
      This map runs through the entire foodlist we got from above and then
      displays every single variable we call
      */
    }
      <Navbar/>
      <Sidebar/>
      <Recipes/>
    </div>
  );
}

export default App;
