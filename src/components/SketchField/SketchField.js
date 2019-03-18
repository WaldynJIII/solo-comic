import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';
import './SketchField.css'
import DropZone from 'react-dropzone';
class SketchFieldArea extends Component {
  state = {
    pictures: [{
     
  name: "Green Lantern",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGG6IdKCOi20D2CUwky3b0x6VwW3PGVjsvxY-BF3S0i_X3W91zdRN6I8",
      spot: "anotherPlace",
    },
    {

        name: "Green Lantern",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGG6IdKCOi20D2CUwky3b0x6VwW3PGVjsvxY-BF3S0i_X3W91zdRN6I8",
        spot: "anotherPlace",
      },
      {

        name: "Green Lantern",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGG6IdKCOi20D2CUwky3b0x6VwW3PGVjsvxY-BF3S0i_X3W91zdRN6I8",
        spot: "anotherPlace",
      }
    ]
  }
  onDragOver = (event) => {
    event.preventDefault()
  }
  onDragStart = (event, id) => {
    console.log(
      'dragstart:', id)
    event.dataTransfer.setData("id", id)
  }
  onDrop = (event, taco) => {
    let id = event.dataTransfer.getData("id");
    let pictures = this.state.pictures.filter((picture) => {
      if (picture.name == id) {
        picture.spot = taco;
      }
      return picture;
    });
    this.setState({
      ...this.state,
      pictures
    });
  }
  _onBackgroundImageDrop = (accepted /*, rejected*/) => {
    if (accepted && accepted.length > 0) {
      let sketch = this._sketch;
      let reader = new FileReader();
      let { stretched, stretchedX, stretchedY, originX, originY } = this.state;
      reader.addEventListener(
        'load',
        () =>
          sketch.setBackgroundFromDataUrl(reader.result, {
            stretched: stretched,
            stretchedX: stretchedX,
            stretchedY: stretchedY,
            originX: originX,
            originY: originY,
          }),
        false,
      );
      reader.readAsDataURL(accepted[0]);
    }
  };
  render() {
    var pictures = {
      aPlace: [],
      anotherPlace: []
    }
    this.state.pictures.forEach((p) => {
      pictures[p.spot].push(<div
        key={p.name}
        onDragStart={(event) => this.onDragStart(event, p.name)}
        draggable
        className="draggable">
        <img src={p.picture} />
        {p.name}

      </div>);
    });
    return (
      <div className="container-drag">
      <div className="container">
      <SketchField 
      width='1024px'
        height='768px'
        tool={Tools.Pencil} //Put in sketch tools here
        // tool={Tools.Select}
            ref={c => (this._sketch = c)}
        lineColor='black'
        lineWidth={3}
            imageFormat='jpeg' />
        
            <div>
              <DropZone
                accept='image/*'
                // multiple={false}
                // style={styles.dropArea}
                // activeStyle={styles.activeStyle}
                // rejectStyle={styles.rejectStyle}
                onDrop={this._onBackgroundImageDrop}>
                Try dropping an image here,<br />
                or click<br />
                to select image as background.
                    </DropZone>
            </div>
          <div className="container-drag">
            <h2 className="header">Spike</h2>
            <div className="wip"
              onDragOver={(event) => this.onDragOver(event)}
              onDrop={(event) => { this.onDrop(event, "anotherPlace") }}>
              <span >Another Place</span>
              {pictures.anotherPlace}
            </div>
            <div className="droppable"

              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "aPlace")}>
              <span >A Place</span>
              {pictures.aPlace}
            </div>
          </div>
  
        </div>
         </div >
    )
  }
}
export default SketchFieldArea
