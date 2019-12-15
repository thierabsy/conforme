import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { FaMapMarked, FaShareAlt, FaPaperPlane } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/contact.scss"
import Social from "../widgets/socials";
import { contacts } from "../data/contact";

const ContactPage = () => (
  <Layout active="contact">
      <SEO title="Contact" />
      <div className="mainwrapper contact">
          <div className="container">   
              <div className="innerContainer">  
                <div className="ct-conatct">
                    <h4>Nous contacter</h4>
                </div> 
                <div className="ct part-1"> 
                  <div className="ct-icon">
                    <FaMapMarked />
                  </div>
                  <div className="adress">   
                    <h4>Notre addresse à Dakar:</h4>
                    <h6> { contacts.adress } </h6>
                    <div className="voir-carte">
                        <a href="https://www.google.com/maps/place/14%C2%B044'45.1%22N+17%C2%B030'52.7%22W/@14.745873,-17.5151852,19z/data=!3m1!4b1!4m13!1m6!3m5!1s0xec1131b910050fd:0x81ccf89e3cd788cb!2sMairie+de+ngor!8m2!3d14.745505!4d-17.5143736!3m5!1s0x0:0x0!7e2!8m2!3d14.7458733!4d-17.5146378" target="_blank">Voir carte</a>
                    </div>
                  </div>
                </div>
                <div className="ct part-2">   
                  <div className="ct-icon">
                    <FaPaperPlane />
                  </div>
                  <div className="adress">   
                    <h4>Nous joindre par:</h4>
                    <h6><span>Téléphone:</span> { contacts.tel } </h6>
                    <h6><span>Email:</span> { contacts.email } </h6>
                  </div>
                </div>
                <div className="ct part-3"> 
                  <div className="ct-icon">
                    <FaShareAlt />
                  </div>
                  <h4>Nous joindre sur les réseaux sociaux:</h4>
                  <Social />
                </div>
              </div>
          </div>
      </div>
  </Layout>
)
  
export default ContactPage
