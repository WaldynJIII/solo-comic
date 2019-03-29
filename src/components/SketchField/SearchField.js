import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { connect } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const styles = {
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
};

class SearchField extends React.Component {
    state = {
        selectedValue: 'a',
    };



    render() {
        const { classes } = this.props;

        return (
            <div className="dropdown">
                       <Button className="category-button" >{this.props.part}</Button>
                       <div class="dropdown-content">
                           <Button value='head' onClick={this.props.setType('head')}>Head</Button>
                           <Button value='r-arm' onClick={ this.props.setType('r-arm')}>Right Arm</Button>
                           <Button value='l-arm' onClick={ this.props.setType('l-arm')}>Left Arm</Button>
                           <Button value='chest' onClick={ this.props.setType('chest')}>Chest</Button>
                           <Button value='r-leg' onClick={ this.props.setType('r-leg')}>Right Leg</Button>
                           <Button value='l-leg' onClick={ this.props.setType('l-leg')}>Left Leg</Button>
                           <Button value='costume' onClick={this.props.setType('costume')}>Costume</Button>
                       </div>
                   </div>
            // <div className="radioButtonDiv">
            //     <FormControlLabel
            //         control={
            //             <Radio
                            
            //                 onClick={this.props.setType}
            //                 value="head"
            //                 color="Head"
            //             />
            //         }
            //         label="Head"
            //     />

            //     <FormControlLabel
            //         control={
            //             <Radio
                            
            //                 onClick={this.props.setType}
            //                 value="r-arm"
            //                 color="blue"
            //             />
            //         }
            //         label="Right Arm"
            //     />
            //     <FormControlLabel
            //         control={
            //             <Radio
                          
            //                 onClick={this.props.setType}
            //                 value="l-arm"
            //                 color="green"
            //             />
            //         }
            //         label="Left Arm"
            //     />
            //     <FormControlLabel
            //         control={
            //             <Radio
                            
            //                 onClick={this.props.setType}
            //                 value="chest"
            //                 color="orange"
            //             />
            //         }
            //         label="Chest"
            //     />
            //     <FormControlLabel
            //         control={
            //             <Radio
                            
            //                 onClick={this.props.setType}
            //                 value="l-leg"
            //                 color="red"
            //             />
            //         }
            //         label="Left Leg"
            //     />
            //     <FormControlLabel
            //         control={
            //             <Radio
                            
            //                 onClick={this.props.setType}
            //                 value="r-leg"
            //                 color="purple"
            //             />
            //         }
            //         label="Right Leg"
            //     />
            //     <FormControlLabel
            //         control={
            //             <Radio
                            
            //                 onClick={this.props.setType}
            //                 value="costume"
            //                 color="gold"
            //             />
            //         }
            //         label="Costume"
            //     />

            // </div>
        );
    }
}

SearchField.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default withStyles(styles)(connect(mapReduxStoreToProps)(SearchField));