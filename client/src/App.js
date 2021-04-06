import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar';
import Recipes from './Components/Recipes';
import Navbar from './Components/Navbar';
import RecipesVeg from './Components/DietFilters/Vegetarian/RecipesVeg';
import RecipeCal500 from './Components/DietFilters/CalorieLess500/RecipesCal500';
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
            <Route exact path ="/Dietfilters/vegetarian" component = {RecipesVeg}/>
            <Route exact path ="/Dietfilters/cal500" component ={RecipeCal500}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

