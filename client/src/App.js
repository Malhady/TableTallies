import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar';
import Recipes from './Components/HomePage/Recipes';
import Navbar from './Components/Navbar';

import RecipesVeg from './Components/DietFilters/Vegetarian/RecipesVeg';
import RecipesPescatarian from './Components/DietFilters/Pescatarian/RecipesVeg';
import Recipeslowpotassium from './Components/DietFilters/LowPotassium/Recipes';
import RecipesKosher from './Components/DietFilters/kosher/Recipes';
import RecipesVegan from './Components/DietFilters/Vegan/Recipes';
import RecipesSugar from './Components/DietFilters/Sugar/Recipes';

import RecipePeanutFree from './Components/Allergies/peanutfree/Recipes';
import RecipeDairyFree from './Components/Allergies/dairyfree/Recipes';
import RecipeEggFree from './Components/Allergies/eggfree/Recipes';
import RecipeSoyFree from './Components/Allergies/soyfree/Recipes';
import RecipeShellFishFree from './Components/Allergies/shellfish/Recipes';
import RecipeporkFree from './Components/Allergies/pork/Recipes';

import RecipeCal500 from './Components/Calories/Less500/RecipesCal500';
import RecipeCal1000 from './Components/Calories/Less1000/RecipesCal1000';
import RecipeCal1500 from './Components/Calories/Less1500/RecipesCal1500';

import RecipeCal2000 from './Components/Calories/Greater2000/RecipesCal2000';
import RecipeCal2500 from './Components/Calories/Greater2500/RecipesCal2500';
import RecipeCal3000 from './Components/Calories/Greater3000/RecipesCal3000';



import history from './Components/history';
import SidebarButton from './Components/SidebarButton';


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

class App extends Component {

  constructor(props, context) {
    super(props, context);
   
    this.state = {
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }
   
  toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
  }

  render(){
    return (

      //This is what shows up on the react client page
      
      <div className="App">
    
        <Navbar/>
        <SidebarButton handleMouseDown={this.handleMouseDown}/>
        <Sidebar handleMouseDown={this.handleMouseDown}
          sidebarVisibility={this.state.visible}/>

        <BrowserRouter history ={history}>
          <Switch>
            <Route exact path ="/" component={Recipes}/>


            <Route exact path ="/dietfilters/vegetarian" component = {RecipesVeg}/>
            <Route exact path ="/dietfilters/pescatarian" component = {RecipesPescatarian}/>
            <Route exact path ="/dietfilters/low-potassium" component = {Recipeslowpotassium}/>
            <Route exact path ="/dietfilters/kosher" component = {RecipesKosher}/>
            <Route exact path ="/dietfilters/vegan" component = {RecipesVegan}/>
            <Route exact path ="/dietfilters/sugar" component = {RecipesSugar}/>

            <Route exact path ="/allergies/peanut-free" component = {RecipePeanutFree}/>
            <Route exact path ="/allergies/dairy-free" component = {RecipeDairyFree}/>
            <Route exact path ="/allergies/egg-free" component = {RecipeEggFree}/>
            <Route exact path ="/allergies/soy-free" component = {RecipeSoyFree}/>
            <Route exact path ="/allergies/shellfish-free" component = {RecipeShellFishFree}/>
            <Route exact path ="/allergies/pork-free" component = {RecipeporkFree}/>

            
            <Route exact path ="/calories/less500" component ={RecipeCal500}/>
            <Route exact path ="/calories/less1000" component ={RecipeCal1000}/>
            <Route exact path ="/calories/less1500" component ={RecipeCal1500}/>

            <Route exact path ="/calories/greater2000" component ={RecipeCal2000}/>
            <Route exact path ="/calories/greater2500" component ={RecipeCal2500}/>
            <Route exact path ="/calories/greater3000" component ={RecipeCal3000}/>
            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

