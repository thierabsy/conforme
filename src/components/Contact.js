import React, { useContext } from "react"
import {  FaHome, FaMobile, FaEnvelope } from "react-icons/fa"
import MainContext from "../context-api/MainContext";
import { contacts } from "../data"

const Contact = () => {
  const context = useContext(MainContext);
  const { state: { showContact }, toggler } = context;

  return(
    <div className="contact-form-2">
      <div className="container">
        <div className="cfc-header">
          <img src={`/images/contact.jpg`} alt="Conatct AGS Immo" />
        </div>
        <div className="cf-content">
          <div className="cfc-text"> Nous Contacter </div>
          <div className="cfc cfc-item-left">
            <div className="c">
                <span>Adresse:</span> { contacts.adress } - { contacts.adress_suite }
            </div>
            <div className="c">
                <span>Email:</span> <a href={`mailto:${ contacts.email }`}> { contacts.email }</a>
            </div>
            <div className="c">
                <span>Téléphone fixe: </span> <a href={`tel:${ contacts.tel }`}> { contacts.tel }</a>
            </div>
            <div className="c">
                <span>Téléphone Orange:</span> <a href={`tel:${ contacts.tel2 }`}> { contacts.tel2 }</a>
            </div>
            <div className="c">
                <span>Téléphone Free:</span> <a href={`tel:${ contacts.tel3 }`}> { contacts.tel3 }</a>
            </div>
              
          </div>
          <div className="cfc cfc-item-right">
            <div className="c">
              <h4>Réseaux sociaux</h4>
                <ul>
                { contacts.socials && 
                  contacts.socials.map(rs => <li key={"rs-" + rs.name}>
                    <a href={`${ rs.link }`}> { rs.icon }</a>
                  </li>
                  ) 
                }
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Contact;
