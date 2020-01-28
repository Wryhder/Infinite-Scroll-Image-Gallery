import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component"
import axios from "axios"

import "./gallery.css"

const ImageGallery = ({ images, loading, fetchImages }) => {
  return (
    <InfiniteScroll 
    dataLength={images.length} 
    next={() => fetchImages()} 
    hasMore={true} 
      loader={<p style={{ textAlign: "center", marginTop: "1%" }}>.....</p>}
    >
      <div className="image-grid">
        {!loading
          ? images.map(image => (
            <div className="image-item" key={image.id}>
                <img src={image.urls.regular} alt={image.alt_description} />
            </div>
          ))
        : ""}
      </div>
      </InfiniteScroll>
  )
}

const InfiniteImages = () => {
  // hold state
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  // fetch images on component mount
  useEffect(() => {
    fetchImages()
  }, [])

  // API endpoint
  const endpoint = "<Endpoint here once available>"

  // fetch images from functions
  const fetchImages = () => {
    axios(endpoint).then(res => {
      setImages([...images, ...res.data.images])
      setLoading(false)
    })
  }
  return (
    <ImageGallery images={images} loading={loading} fetchImages={fetchImages} />
  )
}

ImageGallery.PropTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
  fetchImages: PropTypes.func,
}

export default InfiniteImages
