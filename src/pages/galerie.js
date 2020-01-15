import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { FaMapMarked, FaShareAlt, FaPaperPlane } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/galerie.scss"
import Galerie from "../components/Galerie";

const GaleriePage = () => (
  <Layout active="galerie">
      <SEO title="Galerie" />
      <div className="mainwrapper galerie">
          <Galerie />
      </div>
  </Layout>
)
  
export default GaleriePage
