import React from 'react';
import { connect } from 'react-redux';
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
        search: {
          title: '',
          part: '',  
        },
        anchorEl: null,
    };

    handleClick = event => {
        event.preventDefault()
        this.setState({
            ...this.state,
            anchorEl: event.currentTarget,
        });
        this.props.dispatch({type:'SEND_SEARCH', payload: this.state.search})
    };

    handleClose = () => {
        this.setState({
            ...this.state,
            anchorEl: null,
        });
    };
handleChangeFor=(key)=>(event)=>{

    this.setState({
        ...this.state,
        search:{
            ...this.state.search,
            [key]: event.target.value
        }
    })
}
    render() {
       console.log(this.state.search)
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className='search'>
                <form onSubmit={this.handleClick}>
            <input onChange={this.handleChangeFor('title')}></input>
                    
                    <div onChange={this.handleChangeFor('part')}>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value='costume'
                                    name="costume"
                                />
                               costume
                </label>
                        </div>
                        
                    </div>
                   
                
                <Button
                type='submit'
                value='submit'
                    aria-owns={open ? 'simple-popper' : undefined}
                    aria-haspopup="true"
                    variant="contained"
                    // onClick={this.handleClick}
                >
                    Search
        </Button>
                </form>
                <Popover style={{width: '70%'}}
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
                        <ListItem >
                        
                            <Card style={{ width: '70%' }} className="item-card">
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
                            <Card style={{ width: '70%' }} className="item-card">
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
                        <ListItem>
                            <Card style={{ width: '70%' }} className="item-card">
                                <CardActionArea>
                                    <CardMedia
                                        key='https://static.giantbomb.com/uploads/scale_medium/10/101494/2005465-hhhh.jpg'
                                        component="img"
                                        alt='batman'
                                        className="item-img"
                                        height="240"
                                        image='https://static.giantbomb.com/uploads/scale_medium/10/101494/2005465-hhhh.jpg'
                                        title='batman'
                                        onDragStart={(event) => this.props.onDragStart(event, 'https://static.giantbomb.com/uploads/scale_medium/10/101494/2005465-hhhh.jpg')}
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
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default withStyles(styles)(connect(mapReduxStoreToProps)(SimplePopover));