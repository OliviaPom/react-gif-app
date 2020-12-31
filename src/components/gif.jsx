import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    if (this.props.chooseGif) {
      this.props.chooseGif(this.props.id);
    }
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e47996fa5bf1216fc95df132b29080359680702d5d0&rid=giphy.gif`
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
} 

export default Gif;