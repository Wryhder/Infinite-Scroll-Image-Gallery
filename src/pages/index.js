import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "bulma/css/bulma.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="has-text-centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-2">Scroll Image Gallery with Gatsby and Netlify functions</h1>
      <p className="is-size-5" style={{ marginTop: "2%" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit odit nihil repudiandae et quasi ratione molestias repellendus ullam eaque, libero commodi voluptatibus nam vel architecto, dolor quis provident aperiam sequi molestiae neque! Eius cum facere, pariatur fuga repudiandae architecto officiis ratione vero accusantium totam adipisci quo aperiam repellendus dolor.
      </p>
      <button className="button is-dark is-large" style={{ marginTop: "10%" }}>
        <Link to="/gallery/" className="has-text-white">
          Gallery
        </Link>
      </button>
    </div>
  </Layout>
)

export default IndexPage
