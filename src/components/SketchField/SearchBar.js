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
import SearchField from './SearchField'
const styles = theme => ({
    typography: {
        margin: theme.spacing.unit * 2,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },

});

class SimplePopover extends React.Component {
    state = {
        search: {
            title: '',
            part: 'Choose Part',
        },
        anchorEl: null,


        query: false,

    };
    componentDidMount() {



    }
    handleClick = (event) => {


        this.setState({
            ...this.state,
            anchorEl: event.currentTarget
        })


    }

    setType = (key)=>(event) => {
        this.setState({
            ...this.state,
            search: {
                ...this.state.search,
                part: key,
            }
            
        })
    }




    handleClose = () => {
        this.setState({
            ...this.state,
            anchorEl: null,
            query: false
        });
    };
    handleChangeFor = (key) => (event) => {
console.log(event.target.value)
        this.setState({
            ...this.state,
            search: {
                ...this.state.search,
                [key]: event.target.value
            }
        })
        this.props.dispatch({ type: 'SEND_SEARCH', payload: { title: event.target.value, part: this.state.search.part } })
    }
    render() {
        console.log(this.state.search, this.state.anchorEl)
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);


        return (
            <div className='search'>
            <input className="searchTitle" placeholder="Hero" onChange={this.handleChangeFor('title')} />


                
                <Button
                    onClick={this.handleClick}
                    className="searchButton"
                    aria-owns={open ? this.state.shut : undefined}
                    aria-haspopup="true"
                    variant="contained"

                >
                    Search
                    </Button>
                    


                <Popover style={{ width: '200%' }}
                    style={{ flex: 1 }}
                    id="simple-popper"
                    className='popover'
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
                    <List style={{ width: '130%' }}>

                        {this.props.reduxStore.searchReducer.map(heroImage => (
                            <ListItem //style={{width: '90%'}}
                            >
                                <Card //style={{ width: '90%' }} 
                                    className="item-card">
                                    <CardActionArea>
                                        <CardMedia
                                            key={heroImage.id}
                                            component="img"
                                            alt={heroImage.image}
                                            className="item-img"
                                            height="240"
                                            className={SimplePopover.media}
                                            src={heroImage.image}
                                            title='batman'
                                            onDragStart={(event) => this.props.onDragStart(event, heroImage.hero_id, heroImage.image)}
                                            draggable
                                            className="draggable"
                                        />
                                    </CardActionArea>
                                </Card>
                            </ListItem>
                        ))}

                    </List>
                </Popover>
                <SearchField part={this.state.search.part} setType={this.setType}/>
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