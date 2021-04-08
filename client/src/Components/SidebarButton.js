import React, { Component } from "react";
import './SidebarButton.css';

 
class SideBarButton extends Component {
  render() {
    var open = "close";
    var text = "🡺";

    if (this.props.buttonOpen) {
      open = "open";
      text = "🡸";
    } 


    return (

      <button id="roundButton"
              onMouseDown={this.props.handleMouseDown}
              className = {open}>
                {text}
      </button>
    );
  }
}
 
export default SideBarButton;