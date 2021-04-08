import React, { Component } from 'react';
import RecipeCal1500 from './RecipeCal1500';

class DataTable extends Component {
    render() {
        return (
            <RecipeCal1500
                key={this.props.obj.id}
                title={this.props.obj.name}
                calories={this.props.obj.calories}
                image={this.props.obj.imageURL}
                ingredients={this.props.obj.ingredients}
                recipeURL={this.props.obj.recipeURL}
                healthLabels={this.props.obj.healthLabels}
            />
        );
    }
}

export default DataTable;