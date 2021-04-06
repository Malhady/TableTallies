import { CheckBox } from "@material-ui/icons";
import React, { Component } from "react";
import './Sidebar.css';
import Checkbox from './Filters/Checkbox';
import FilterCheckBox from './Filters/FilterCheckBox';


export default class Sidebar extends Component {
    state = {checked: false};

    handleCheckboxChange = event =>
        this.setState({ checked: event.target.checked});
  
    render() {
      return (
        <div className = "Sidebar">
            <FilterCheckBox className = "Sidebar_content"/>
        </div>
      );
    }
  }