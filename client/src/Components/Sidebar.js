import React, { Component } from 'react';
import history from './history';
import {Button} from 'react-bootstrap';
import './Sidebar.css';




function btnClickCal500(){
    history.push('/dietfilters/cal500');
    window.location.reload();
}
function btnClickHome(){
    history.push('/');
    window.location.reload();
}
function btnClickVegetarian(){
    history.push('/dietfilters/Vegetarian');
    window.location.reload();
}

const Sidebar = () =>(
    <div className="Sidebar">
        <Button onClick={btnClickHome} className = "Sidebar_content" variant="contained" color="primary"> 
            Home 
        </Button>
        <Button onClick={btnClickVegetarian} className = "Sidebar_content" variant="contained" color="primary"> 
            Vegetarian
        </Button>
        <Button onClick={btnClickCal500} className = "Sidebar_content" variant="contained" color="primary"> 
            Under 500 Calories
        </Button>

        <h1 className = "Sidebar_content">Filter</h1>
        <h1 className = "Sidebar_content">Filter</h1>
        <h1 className = "Sidebar_content">Filter</h1>

    </div>
);

export default Sidebar;

