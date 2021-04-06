import React, { Component } from 'react';
import RecipeCal2000 from './RecipeCal2000';

class DataTable extends Component {
    render() {
        return (
            <RecipeCal2000
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