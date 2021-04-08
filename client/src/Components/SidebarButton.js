import React, { Component } from "react";
import './SidebarButton.css';
 
class SideBarButton extends Component {
  render() {
    var open = "close";

    if (this.props.buttonOpen) {
      open = "open";
    } 

    return (

      <button id="roundButton"
              onMouseDown={this.props.handleMouseDown}
              className = {open}>
              
      </button>
    );
  }
}
 
export default SideBarButton;