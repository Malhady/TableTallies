import '../Sidebar.css';
import Checkbox from './Checkbox';

const FilterCheckboxObj = ({nutLabel}) => {

    state = {checked: false};

    handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked});
    
    return(
        <label className= 'sidebar_Content'>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleCheckboxChange}
                />
                <span>{nutLabel}</span>      
        </label>
    );
}

export default FilterCheckboxObj;