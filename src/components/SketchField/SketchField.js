import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';


class SketchFieldArea extends Component {
  render() {
    return (
      <SketchField width='1024px'
        height='768px'
        tool={Tools.Pencil} //Put in sketch tools here
        // tool={Tools.Select}
        lineColor='black'
        lineWidth={3} />
    )
  }
}
export default SketchFieldArea
