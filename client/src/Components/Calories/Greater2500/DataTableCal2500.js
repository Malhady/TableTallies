import React, { Component } from 'react';
import RecipeCal2500 from './RecipeCal2500';

class DataTable extends Component {
    render() {
        return (
            <RecipeCal2500
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