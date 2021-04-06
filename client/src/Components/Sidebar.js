import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';
import './Sidebar.css';


class Sidebar extends Component{

  
    render(){
        var visibility = "hide";

        if(this.props.sidebarVisibility){
            visibility = "show";
        }
        return(
            <div id="flyoutMenu" className={visibility}
                >

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filters
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/dietfilters/Vegetarian">Vegetarian</Dropdown.Item>
                        <Dropdown.Item href="/dietfilters/cal500">Under 500 Calories</Dropdown.Item>
                        <Dropdown.Item href="/">Home</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>
        );
    }
}
export default Sidebar;

