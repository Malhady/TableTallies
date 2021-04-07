import React, { Component } from "react";
import SidebarButton from './SidebarButton';
import Sidebar from './Sidebar';
 
class MenuContainer extends Component {

    constructor(props, context) {
        super(props, context);
       
        this.state = {
          visible: false,
          open: false
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
            visible: !this.state.visible,
            open: !this.state.open
        });
      }

    render() {
        return (
            <div>
            <SidebarButton handleMouseDown={this.handleMouseDown}
                open={this.state.open}
                />
            <Sidebar handleMouseDown={this.handleMouseDown}
                sidebarVisibility={this.state.visible}/>
            </div>
        );
    }
}
 
export default MenuContainer;