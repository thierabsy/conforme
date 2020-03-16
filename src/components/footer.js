import { Link } from "gatsby"
import React, { useContext} from "react"
import MainContext from "../context-api/MainContext";
import { FaFacebookF, FaLinkedinIn} from "react-icons/fa"

import { contacts } from "../data/contact" 

const Footer = () => {
    const context = useContext(MainContext);
    const { toggler } = context;
    return (
        <footer>
            <div className="container">
                <div className="ft-footer">
                    <div className="ft-left">
                        <img src="/logo.jpg" alt="Conforme Logo" />
                        <p>Cabinet de conseils, formation, management et études.</p>
                    </div>
                    <div className="ft-right">
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
            <div className="ft-copy">
                © {new Date().getFullYear()} Conforme Consulting
            </div>
        </footer>
    )
}

export default Footer
