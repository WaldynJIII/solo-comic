import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
const styles = theme => ({
    typography: {
        margin: theme.spacing.unit * 2,
    },
});

class SimplePopover extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {
       
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className='search'>
                <Button
                    aria-owns={open ? 'simple-popper' : undefined}
                    aria-haspopup="true"
                    variant="contained"
                    onClick={this.handleClick}
                >
                    Open Popover
        </Button>
                <Popover
                    id="simple-popper"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <List >
                        <ListItem style={{width: '20%'}}>
                        
                            <Card style={{width: '20%'}} className="item-card">
                                <CardActionArea>
                                    <CardMedia
                                        key='https://static.giantbomb.com/uploads/original/10/101494/2165401-newgb2.jpg'
                                        component="img"
                                        alt='batman'
                                        className="item-img"
                                        height="240"
                                        image='https://static.giantbomb.com/uploads/original/10/101494/2165401-newgb2.jpg'
                                        title='batman'
                                        onDragStart={(event) => this.props.onDragStart(event, 'https://static.giantbomb.com/uploads/original/10/101494/2165401-newgb2.jpg' )}
                                        draggable
                                        className="draggable"
                                    />
                                    </CardActionArea>
                                    </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={{ width: '20%' }} className="item-card">
                                <CardActionArea>
                                    <CardMedia
                                        key='https://static.giantbomb.com/uploads/scale_medium/10/101494/2063627-bbbb.jpg'
                                        component="img"
                                        alt='batman'
                                        className="item-img"
                                        height="240"
                                        image='https://static.giantbomb.com/uploads/scale_medium/10/101494/2063627-bbbb.jpg'
                                        title='batman'
                                        onDragStart={(event) => this.props.onDragStart(event, 'https://static.giantbomb.com/uploads/scale_medium/10/101494/2063627-bbbb.jpg')}
                                        draggable
                                        className="draggable"
                                    />
                                </CardActionArea>
                            </Card>
                        </ListItem>
                    </List>
                </Popover>
            </div>
        );
    }
}

SimplePopover.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePopover);