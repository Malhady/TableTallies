import react from 'react';
import style from './recipe.module.css';
import Recipe from './Recipe';
import React, { Component } from "react";
import axios from "axios";
import DataTable from './DataTable';

export default class Recipes extends Component{
    constructor(props){
        super(props);
        this.state = { foodList: [] };
    }

    componentDidMount(){
        axios.get('http://localhost:3001/read')
            .then(res => {
                this.setState({ foodList: res.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }

    recipe(){
        return this.state.foodList.map((val, i) =>{
            return <DataTable obj={val} key={i} />;
        })
    }

    render(){
        return (
            <div className = "recipes">
                {this.recipe()}
            </div>
            )
    }
}

