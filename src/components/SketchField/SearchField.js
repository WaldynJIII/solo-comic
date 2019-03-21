import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
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

class RadioButtons extends React.Component {
    state = {
        selectedValue: 'a',
    };



    render() {
        const { classes } = this.props;

        return (
            <div>
                <FormControlLabel
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'a'}
                            onClick={this.props.setType}
                            value="Head"
                            color="Head"
                        />
                    }
                    label="Head"
                />

                <FormControlLabel
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'a'}
                            onClick={this.props.setType}
                            value="r-arm"
                            color="blue"
                        />
                    }
                    label="Right Arm"
                />
                <FormControlLabel
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'a'}
                            onClick={this.props.setType}
                            value="l-arm"
                            color="green"
                        />
                    }
                    label="Left Arm"
                />
                <FormControlLabel
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'a'}
                            onClick={this.props.setType}
                            value="chest"
                            color="orange"
                        />
                    }
                    label="Chest"
                />
                <FormControlLabel
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'a'}
                            onClick={this.props.setType}
                            value="l-leg"
                            color="red"
                        />
                    }
                    label="Left Leg"
                />
                <FormControlLabel
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'a'}
                            onClick={this.props.setType}
                            value="r-leg"
                            color="purple"
                        />
                    }
                    label="Right Leg"
                />
                <FormControlLabel
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'a'}
                            onClick={this.props.setType}
                            value="costume"
                            color="gold"
                        />
                    }
                    label="Costume"
                />

            </div>
        );
    }
}

RadioButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default withStyles(styles)(connect(mapReduxStoreToProps)(RadioButtons));