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
});

class SimplePopover extends React.Component {
    state = {
        search: {
            title: '',
            part: '',
        },
        anchorEl: null,


        query: false,

    };
    componentDidMount() {


        this.props.dispatch({ type: 'SEND_SEARCH', payload: { title: this.state.search.title, part: 'costume' } })
    }
    handleClick = (event) => {


        this.setState({
            ...this.state,
            anchorEl: event.currentTarget
        })


    }

    setType = (event) => {
        this.setState({
            ...this.state,
            search: {
                ...this.state.search,
                part: event.target.value
            },
            query: true,
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

        if (this.state.query) {
            return (
                <div className='search'>


                    <input onChange={this.handleChangeFor('title')} />

                    <Button
                        onClick={this.handleClick}
                        type='submit'
                        value='submit'
                        ref='buttonElement'

                        aria-owns={open ? this.state.shut : undefined}
                        aria-haspopup="true"
                        variant="contained"

                    >
                        Search
                    </Button>


                    <Popover style={{ width: '70%' }}
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
                            
                                {this.props.reduxStore.searchReducer.map(heroImage => (
                                    <ListItem>
                                    <Card style={{ width: '70%' }} className="item-card">
                                        <CardActionArea>
                                            <CardMedia
                                                key={heroImage.hero_id}
                                                component="img"
                                                alt='batman'
                                                className="item-img"
                                                height="240"
                                                image={heroImage.image}
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

                </div>
            );
        }
        else {
            return (
                <div className='search'>
                    <SearchField setType={this.setType} />
                </div>
            )

        }
    }

}

SimplePopover.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default withStyles(styles)(connect(mapReduxStoreToProps)(SimplePopover));