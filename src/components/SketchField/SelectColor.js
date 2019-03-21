import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class ColorSelect extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (key)=>(event) => {
        
        
        this.setState({ anchorEl: null });
        this.props.setColor([key])
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    Select Color
        </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem value='red' onClick={this.handleClose('red')}>Red</MenuItem>
                    <MenuItem value='blue' onClick={this.handleClose('blue')}>Blue</MenuItem>
                    <MenuItem value='green' onClick={this.handleClose('green')}>Green</MenuItem>
                    <MenuItem value='black' onClick={this.handleClose('black')}>Black</MenuItem>
                    <MenuItem value='orange' onClick={this.handleClose('orange')}>Orange</MenuItem>
                    <MenuItem value='purple' onClick={this.handleClose('purple')}>Purple</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default ColorSelect;