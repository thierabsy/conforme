import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { FaMapMarked, FaShareAlt, FaPaperPlane } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/contact.scss"
import Contact from "../components/Contact";

const ContactPage = () => (
  <Layout active="contact">
      <SEO title="Contact" />
      <div className="mainwrapper contact">
          <Contact />
      </div>
  </Layout>
)
  
export default ContactPage
