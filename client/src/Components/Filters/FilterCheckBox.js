import React, { Component } from "react";
import Checkbox from './Checkbox';
import axios from "axios";
import DataTableFilter from './DataTableFilter';


export default class FilterCheckBox extends Component {
    
    constructor(props){
        super(props);
        this.state = { availFilters: [] };

    }
    
    state = {checked: false};

    componentDidMount(){
        axios.get('http://localhost:3001/read')
            .then(res => {
                this.setState({ availFilters: res.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }

    handleCheckboxChange = event =>
        this.setState({ checked: event.target.checked});
  
    filter(){
        return this.state.availFilters.map((val, i) =>{
            return <DataTableFilter obj={val} key={i} />;
       })
    }

    render() {
      return (
          <div>
            {this.filter()}
        </div>
      );
    }
  }