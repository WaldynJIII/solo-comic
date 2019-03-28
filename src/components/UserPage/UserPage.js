import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  state={
    input: '',
  }
componentDidMount=()=>{
  this.props.dispatch({type: 'RESET'})
}
  handleChange = (event) => {
    this.setState({
...this.state,
input: event.target.value
    })
    this.props.dispatch({ type: 'IGOR', payload: { title: event.target.value, id: this.props.reduxStore.user.id } })
  }
  // removeImage=(event)=>{
 
  //     return this.props.disptch({type: 'REMOVE', payload: heroImage.id})
    
  // }
  render() {
let answer =''
    return (
      <div>
        <h1 id="welcome">
          Welcome, Doctor {this.props.reduxStore.user.username}!
    </h1>
        <p>Your ID is: {this.props.reduxStore.user.id}</p>
        Search by Hero and Remove images by clicking on them.
        <input onChange={this.handleChange} />
        <div>
        <List>
            <ListItem style= {{ width: '50%' }}>
          {this.props.reduxStore.favoritesReducer.map(heroImage => (
            
            <Card style= {{ width: '70%' }}>
              <CardActionArea>
            <CardMedia
              key={heroImage.hero_id}
              component="img"
              alt='batman'
              className="item-img"
              height="240"
              image={heroImage.image}
              title='batman'
              onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.props.dispatch({type: 'REMOVE', payload: {imageId: heroImage.id, id: this.props.reduxStore.user.id, title: this.state.input}}) } } />

              
            />
              </CardActionArea>
            </Card>
           
            ))}
            </ListItem>
        </List>
        </div>
        <LogOutButton className="log-in" />
      </div>
    );
  }
}
// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore: reduxStore
})

// this allows us to use <App /> in index.js
export default connect(mapReduxStoreToProps)(UserPage);
