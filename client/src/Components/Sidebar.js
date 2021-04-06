import React, { Component } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import './Sidebar.css';


class Sidebar extends Component {


    render() {
        var visibility = "hide";

        if (this.props.sidebarVisibility) {
            visibility = "show";
        }
        return (
            <div id="flyoutMenu" className={visibility}
            >

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filters
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        
                        <Dropdown.Item href="/calories/less500">Under 500 Calories</Dropdown.Item>
                        <Dropdown.Item href="/">Home</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>
        );
    }
}
export default Sidebar;

