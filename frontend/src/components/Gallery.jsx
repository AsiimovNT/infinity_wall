import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import ImageTile from './ImageTile.jsx';
import './Gallery.css';

const LIMIT = 20;

function Gallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    try {
      const { data } = await axios.get(`/api/images?page=${page}&limit=${LIMIT}`);
      setImages(prev => [...prev, ...data.images]);
      setPage(prev => prev + 1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      style={{ overflow: 'visible' }}
    >
      <div className="masonry">
        {images.map(img => (
          <div key={img.id} className="masonry-item">
            <ImageTile src={img.url} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default Gallery; 