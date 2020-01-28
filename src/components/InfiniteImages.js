import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component"
import "./gallery.css"

const ImageGallery = ({ images, loading, fetchImages }) => {
  return (
    <InfiniteScroll 
    dataLength={images.length} 
    next={() => fetchImages()} 
    hasMore={true} 
    loader={
      <p style={{ textAlign: "center", marginTop: "1%" }}>
        .....
      </p>
    } >
      <div className="image-grid">
        {!loading
          ? images.map(image => (
            <div className="image-item" key={image.id}>
              <img src={image.urls.regular} alt={image.alt.description} />
            </div>
          ))
        : ""}
      </div>
      </InfiniteScroll>
  )
}

ImageGallery.PropTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
  fetchImages: PropTypes.func,
}
