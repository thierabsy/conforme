import React, { useContext } from "react"
import {  FaHome, FaMobile, FaEnvelope } from "react-icons/fa"
import MainContext from "../context-api/MainContext";
import { contacts } from "../data"

const Contact = () => {
  const context = useContext(MainContext);
  const { state: { showContact }, toggler } = context;

  return(
    <div className="contact-form">
      <div className="container">
      {/* <div className={`slogan-modal ${ showContact ? "showModal" : ""}`}> */}
        <div className="cf-content">
          {/* <div className="cf-header">
            <div className="top">
              <div className="topLeft">
                <ul>
                  <li className="tph-items"> <FaHome /> <span> { contacts.adress } </span> </li>
                </ul>
              </div>
              <div className="topRight">
                <ul>
                  <li className="tph-items"><a color="white" href={`mailto:${ contacts.tel }`}>  <FaMobile /> <span> { contacts.tel } </span> </a></li>
                  <li className="tph-items"><a color="white" href={`mailto:${ contacts.email }`}>  <FaEnvelope /> <span> { contacts.email } </span> </a></li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="cf-body">
            {/* <div className="btn-fermer"  onClick={() => toggler("showContact")}>
              Fermer
            </div> */}
            <div className="cfb-header">
              <span>Envoyez nous un message</span>
            </div>
            <div className="cfb-form">
              <form name="Contact" method="POST" data-netlify="true">
                <div className="form-control">
                  <label htmlFor="nom">Votre Nom*:</label>
                  <input type="text" name="nom" id="nom" required />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Votre email*:</label>
                  <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                  <label htmlFor="objet">Objet de votre message*:</label>
                  <input type="text" name="objet" id="objet" required />
                </div>
                <div className="form-control">
                  <label htmlFor="objet">Votre Message*:</label>
                  <textarea name="message" id="message" rows="5" required/>
                </div>
                <div className="form-control">
                  <div data-netlify-recaptcha="true" />
                </div>
                <div className="btn-submit">
                  <button type="submit">Envoyer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Contact;
