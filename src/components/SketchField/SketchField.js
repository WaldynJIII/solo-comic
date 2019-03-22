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
class SketchFieldArea extends Component {
  state = {
    tool: Tools.Pencil,
    color: 'black',
    picture: '',
    hero: '',

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
        <SearchBar onDragStart={this.onDragStart} onAdd={this.onAdd} />
        <br></br>
        <div>
          <Card style={{ width: '20%' }} className="item-card">
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
        </div>
        <br></br>
        <div className="container">
          <SelectTool setTool={this.setTool} />
          <Button onClick={this.clearSketch}>Clear</Button>
          <SelectColor setColor={this.setColor} />
          <SketchField
            width='1024px'
            height='768px'
            tool={this.state.tool} //Put in sketch tools here
            // tool={Tools.Select}
            ref={c => (this._sketch = c)}
            lineColor={this.state.color}
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
