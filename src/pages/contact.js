import React, { useContext, useState } from "react"
import { FaFacebookF, FaLinkedinIn} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/emploi.scss"
import MainContext from "../context-api/MainContext";
import Modal from "../components/Modal";
import PageHeader from "../components/PageHeader";

const Experts = () => {
  const context = useContext(MainContext);
  const { state: { modalType, contacts } } = context;
  return(
      <Layout active="contact">
          <SEO title="Contact" />
          {
            modalType !== "" &&
            <Modal type="apropos-aside">
              <img src="/images/enseigne.jpg" alt="Enseigne Ags Immo" />
            </Modal>
          }
          <div className="mainwrapper contact-page">
            <PageHeader img="/images/footer_bg.jpg" page="Notre Expertise" >
              <h1>Contact</h1>
            </PageHeader>
          <div className="container">   
            <div className="ap-wrapper">   
              <div className="ct-left-img">
                <img src={`/images/monument.jpg`} alt="" /> 
              </div>
              <div className="ct-text">
                <div className="ct-text-header">
                  <h3>Nous Contacter</h3>
                  <p>Vous pouvez nous joindre à tout moment aux horaires d'ouverture du cabinet.</p>
                  <p>Jours: <span>Lundi</span> au <span>Samedi</span></p>
                  <p>Horaires: <span>08h</span>-<span>18h</span></p>
                </div>
                <div className="ft-contact">
                  <h4><span>Contact</span></h4>
                  <ul>
                      <li><span> Addresse:</span> { contacts.adress } </li>
                      <li><span> Tel:</span> <a href={`tel:${ contacts.tel.replace(" ", "") }`}> { contacts.tel_label }</a> </li>
                      <li><span> Email:</span> <a color="white" href={`mailto:${ contacts.email }`}>{ contacts.email }</a> </li>
                  </ul>
                </div>
                <div className="ft-socials">
                  <ul>
                      <li><a href="https://www.linkedin.com" target="_blank"><FaLinkedinIn /> </a> </li>
                      <li><a href="https://www.facebook.com" target="_blank"><FaFacebookF /> </a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  )
}
  
export default Experts;
