import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} chooseGif={props.chooseGif} />)}
    </div>
  );
};

// class GifList extends Component {

//   renderList = (props) => {
//     return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} chooseGif={props.chooseGif} />)
//   }

//   render() {
//     return (
//       <div className="gif-list">
//         {this.renderList(props)}
//       </div>
//     );
//   }
// } 

export default GifList;