import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';
import './SketchField.css'
import { connect } from 'react-redux';
import SearchBar from './SearchBar'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
import SelectColor from './SelectColor'
import SelectTool from './SelectDrawTool'
import Favorites from './Favorites'
class SketchFieldArea extends Component {
  state = {
    tool: Tools.Pencil,
    color: 'black',
    picture: '',
    hero: '',
    bgColor: 'white',

  }
  onDragOver = (event) => {
    event.preventDefault()
  }
 onSave=()=>{
   this.props.dispatch({type: "TO_THE_PIT", payload: {
     image: this.state.picture,
    hero: this.state.hero,
     user: this.props.reduxStore.user.id}})
 }

  setColor = (color) => {
    console.log(color)
    this.setState({
      ...this.state,
      color: color
    })

  }
  setTool = (tool) => {
    console.log(tool)
    this.setState({
      ...this.state,
      tool: tool
    })

  }

  onDragStart = (event, id, image) => {
    this.setState({
      ...this.state,
      picture: image,
        hero: id,
    })

  }
  clearSketch = () => {
    this._sketch.clear();
   
  }
  onAdd = (accepted /*, rejected*/, event) => {
    this._sketch.addImg(this.state.picture)
  }

  render() {
    console.log(this.state, this.props.reduxStore.user.id)



    return (

      <div className="container-drag">
      <div>
        <SearchBar onDragStart={this.onDragStart} onAdd={this.onAdd} />
        </div>
        <br></br>
        
        <div className="item-card">
        
          <Card style={{ width: '250px' }} >
            <CardActionArea>
              <CardMedia
                key={this.state.picture}
                component="img"
                alt='Put Image Here'
                className="item-img"
                height="240"
                image={this.state.picture}
                title='batman'


              />
            </CardActionArea>
            
            <Button onClick={this.onAdd}>Add Picture?</Button>
            <Button onClick={this.onSave}>Save Picture?</Button>
          </Card>
          <div > 
            {/* //className='sketch-ops' */}
          <SelectTool setTool={this.setTool} />
          <Button onClick={this.clearSketch}>Clear</Button>
          <SelectColor setColor={this.setColor} />
          </div>
        </div>
        <Favorites onDragStart={this.onDragStart} onAdd={this.onAdd} />
        <div >
         
         
        
       
         
          <SketchField
        
        className="sketch"
            width='vw'
            height='1000px'
            tool={this.state.tool} //Put in sketch tools here
            // tool={Tools.Select}
            ref={c => (this._sketch = c)}
            lineColor={this.state.color}
            backgroundColor={this.state.bgColor}
            lineWidth={3}
            imageFormat='jpeg' />




        </div>
      </div >
    )
  }
}
const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(SketchFieldArea)
