import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InfiniteImages from "../components/InfiniteImages"

const Gallery = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <h1 className="is-size-3">Infinite Scroll Gallery</h1>
      <p style={{ marginBottom: "5%" }}>
        Scroll down for more images from the scifi multiverse...
      </p>
      <InfiniteImages />
    </Layout>
  )
}

export default Gallery
