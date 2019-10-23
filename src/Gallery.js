import React, { Component } from 'react'
import './gallery.css';

export default class Gallery extends Component {

  constructor() {
    super();
    this.state = {
      expandedImg: null
    }
  }

  imageCells = ['1-_DSC2972.jpg', '2-_DSC2973.jpg', '3-_DSC2981.jpg', '4-_DSC2986.jpg', '5-_DSC2988.jpg', '6-_DSC2990.jpg', '9-_DSC2998.jpg', '10-_DSC2999.jpg', '11-_DSC3002.jpg', '12-_DSC3004.jpg', '14-_DSC3018.jpg', '15-_DSC3022.jpg', '21-_DSC3043.jpg', '22-_DSC3045.jpg', '23-_DSC3053.jpg', '24-_DSC3055.jpg', '26-_DSC3063.jpg', '27-_DSC3067.jpg', '30-_DSC3086.jpg', '31-_DSC3092.jpg', '32-_DSC3098.jpg'
  ]

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
              (img, i) => <figure key={i} className={`image ${this.state.expandedImg === i ? "expanded" : ""}`} onClick={() => { this.handleImgClick(i) }}
                style={{ background: `url(/2019-10-22/${img}) no-repeat` }}></figure>
            )
          }
        </div>


      </div >
    )
  }
}