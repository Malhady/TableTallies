import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar';
import Recipes from './Components/Recipes';
import Navbar from './Components/Navbar';
import RecipesVeg from './Components/DietFilters/Vegetarian/RecipesVeg';
import RecipeCal500 from './Components/DietFilters/CalorieLess500/RecipesCal500';
import history from './Components/history';


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
  
      <Navbar/>
      <Sidebar/>
      

      <BrowserRouter history ={history}>
        <Switch>
          <Route exact path ="/" component={Recipes}/>
          <Route exact path ="/Dietfilters/vegetarian" component = {RecipesVeg}/>
          <Route exact path ="/Dietfilters/cal500" component ={RecipeCal500}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
