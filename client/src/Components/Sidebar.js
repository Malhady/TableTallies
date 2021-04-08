import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Sidebar.css';


class Sidebar extends Component {


    render() {
        var visibility = "hide";

        if (this.props.sidebarVisibility) {
            visibility = "show";
        }
        return (
            <div id="flyoutMenu" className={visibility}>

                    <DropdownButton id="dropdown-basic-button" title="Diets">                        
                        <Dropdown.Item href="/dietfilters/vegetarian">Vegetarian</Dropdown.Item>
                        <br/>
                        <Dropdown.Item href="/dietfilters/pescatarian">Pescatarian</Dropdown.Item>
                        <br/>
                        <Dropdown.Item href="/dietfilters/low-potassium">Low-Potassium</Dropdown.Item>
                        <br/>
                        <Dropdown.Item href="/dietfilters/kosher">Kosher</Dropdown.Item>
                        <br/>
                        <Dropdown.Item href="/dietfilters/vegan">Vegan</Dropdown.Item>
                        <br/>
                        <Dropdown.Item href="/dietfilters/sugar">Low Sugar</Dropdown.Item>
                    </DropdownButton>
           

                    <DropdownButton id="dropdown-basic-button" title="Allergies">                        
                        <Dropdown.Item href="/allergies/peanut-free">Peanut Allergy</Dropdown.Item>
                        <br/>
                        <Dropdown.Item href="/allergies/dairy-free">Diary Allergy</Dropdown.Item><br/>
                        <Dropdown.Item href="/allergies/egg-free">Egg Allergy</Dropdown.Item><br/>
                        <Dropdown.Item href="/allergies/soy-free">Soy Allergy</Dropdown.Item><br/>
                        <Dropdown.Item href="/allergies/shellfish-free">Shellfish Allergy</Dropdown.Item><br/>
                        <Dropdown.Item href="/allergies/pork-free">Pork Free</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton id="dropdown-basic-button" title="Calories">                        
                        <Dropdown.Item href="/calories/less500">Less Than 500</Dropdown.Item><br/>
                        <Dropdown.Item href="/calories/less1000">Less Than 1000</Dropdown.Item><br/>
                        <Dropdown.Item href="/calories/less1500">Less Than 1500</Dropdown.Item><br/>
                        <Dropdown.Item href="/calories/greater2000">Greater Than 2000</Dropdown.Item><br/>
                        <Dropdown.Item href="/calories/greater2500">Greater Than 2500</Dropdown.Item><br/>
                        <Dropdown.Item href="/calories/greater3000">Greater Than 3000</Dropdown.Item><br/>
                    </DropdownButton>

            </div>
        );
    }
}
export default Sidebar;

