import React, { Component } from 'react'
import './gallery.css';

export default class Gallery extends Component {

  constructor() {
    super();
    this.state = {
      expandedImg: null
    }
  }

  imageCells = ['1', '2', '3', '4', '5',
    '6', '7']

  handleImgClick = imgNum => {
    this.setState({
      expandedImg: imgNum
    })

  }
  render() {
    return (
      <div className="Gallery">
        <div className="container">

          {
            this.imageCells.map(
              (img, i) => <figure key={i} className={`image ${this.state.expandedImg === i ? "expanded" : ""}`} onClick={() => { this.handleImgClick(i) }}>{img}</figure>
            )
          }
        </div>


      </div>
    )
  }
}