import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const theme = createMuiTheme({

    overrides: {
        // Name of the component ⚛️ / style sheet
        MuiButton: {
          // Name of the rule
          text: {
            // Some CSS
       borderRadius: 3,
            color: 'yellow',
        border: 1,
        borderColor: 'black',
            
          },
        },
      },
    })

class ToolSelect extends React.Component {
    state = {
        anchorEl: null,
    };
   
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (key) => (event) => {


        this.setState({ anchorEl: null });
        this.props.setTool([key])
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <MuiThemeProvider theme={theme}>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    Select Tool
        </Button>
        </MuiThemeProvider>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem value='red' onClick={this.handleClose('pencil')}>Pencil</MenuItem>
                    <MenuItem value='blue' onClick={this.handleClose('select')}>Select</MenuItem>
                    <MenuItem value='green' onClick={this.handleClose('line')}>Line</MenuItem>
                    <MenuItem value='black' onClick={this.handleClose('rectangle')}>Rectangle</MenuItem>
                    <MenuItem value='orange' onClick={this.handleClose('circle')}>Circle</MenuItem>
                
                </Menu>
            </div>
        );
    }
}
export default ToolSelect;