import React, { Component } from 'react';
import FilterCheckboxObj from './FilterCheckboxObj';

class DataTableFilter extends Component {
    render() {
        return (
            <FilterCheckboxObj
                nutLabel={this.props.obj.healthLabels}
            />

            
        );
    }
}

export default DataTableFilter;