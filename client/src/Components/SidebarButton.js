import React, { Component } from "react";
import './SidebarButton.css';
 
class SideBarButton extends Component {
  render() {
    return (
      <button id="roundButton"
              onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}
 
export default SideBarButton;