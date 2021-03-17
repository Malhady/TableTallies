import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './Sidebar.css';
import {Filter} from '../../../server/index';

const Sidebar = () =>(
    <div className="Sidebar">
        <Button className = "Sidebar_content" variant="contained" color="primary" onClick={Filter(Pizza)}> 
            Pizza 
        </Button>
        <Button className = "Sidebar_content" variant="contained" color="primary"> 
            Smoothie
        </Button>
        <h1 className = "Sidebar_content">Filter</h1>
        <h1 className = "Sidebar_content">Filter</h1>
        <h1 className = "Sidebar_content">Filter</h1>
        <h1 className = "Sidebar_content">Filter</h1>

    </div>
);

export default Sidebar;

