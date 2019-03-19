import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';
import './SketchField.css'
import DropZone from 'react-dropzone';
import SearchBar from './SearchBar'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
class SketchFieldArea extends Component {
  state = {
    tool: Tools.Pencil,
    picture: ''
  }
  onDragOver = (event) => {
    event.preventDefault()
  }
  toolToggle = ()=>{
if(this.state.tool== Tools.Pencil){
  this.setState({
    ...this.state,
    tool: Tools.Select
  })
}
 else if(this.state.tool == Tools.Select){
   this.setState({
     ...this.state,
     tool: Tools.Pencil
   })
 }
  }
  

  onDragStart = (event, id) => {
    this.setState({
      ...this.state,
      picture:
    id,
  })
  
  }
 
  onAdd = (accepted /*, rejected*/, event) => {
    
   
         this._sketch.addImg(this.state.picture) 
    
      }
  
  render() {
    console.log(this.state)
   
  
   
    return (
     
      <div className="container-drag">
        <SearchBar onDragStart ={this.onDragStart} onAdd={this.onAdd}/>
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
          </Card>
        </div>
<br></br>
      <div className="container">
          <button onClick={this.toolToggle}>Toggle Tool</button>
      <SketchField 
      width='1024px'
        height='768px'
        tool={this.state.tool} //Put in sketch tools here
        // tool={Tools.Select}
            ref={c => (this._sketch = c)}
        lineColor='black'
        lineWidth={3}
            imageFormat='jpeg' />
        
            
        
      
        </div>
         </div >
    )
  }
}
export default SketchFieldArea
