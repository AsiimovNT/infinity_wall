import React from 'react';
import './ImageTile.css';

function ImageTile({ src }) {
  return <img src={src} alt="" className="image-tile" loading="lazy" />;
}

export default ImageTile; 