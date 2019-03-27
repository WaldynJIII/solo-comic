import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class Favorites extends Component{
  componentDidMount = () => {
    this.props.dispatch({ type: 'RESET' })
  }
  handleChange = (event) => {
    this.props.dispatch({ type: 'IGOR', payload: { title: event.target.value, id: this.props.reduxStore.user.id } })
  }
  render(){
    return(
      <div className='favorite'>
Search The  Body Pit by Hero
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
                  onDragStart={(event) => this.props.onDragStart(event, heroImage.hero_id, heroImage.image)}
              draggable
              className="draggable"
            />
              </CardActionArea>
            </Card>
           
            ))}
            </ListItem>
        </List>
        </div>
        </div>
    )
  }
          }
const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Favorites)