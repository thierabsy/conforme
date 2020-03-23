import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FaEnvelope, FaMobile, FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { MdClose, MdMenu } from "react-icons/md"
import Fade from 'react-reveal/Fade';

import { contacts } from "../data/contact" 
// import Social from "../widgets/socials";
import MainContext from "../context-api/MainContext";

const Navbar = ({active , toggler}) => {
  return(
    <div className="top container">
      <div className="topRight">
        <Link to="/">
          <img src="/logo.jpg" alt="Logo" />
        </Link>
      </div>
      <div className="topLeft navigation navigation-large">
        <ul>
          <li className={ `${active === "accueil" ? "active" : ""}` }> 
            <Link color="white" to="/" onClick={() => toggler("showNav")}>Accueil </Link>
          </li>
          <li className={ `navProd ${active === "presentation" ? "active" : ""}`}> <span className="hsub-title">Présentation</span>
            <div className="subnav">
              <Link to="/presentation" onClick={() => toggler("showNav")}> Le Cabinet </Link>
              <Link to="/presentation" onClick={() => toggler("showNav")}> Vision </Link>
              <Link to="/presentation" onClick={() => toggler("showNav")}> Mission </Link>
              <Link to="/presentation" onClick={() => toggler("showNav")}> Valeurs </Link>
            </div>
          </li>
          <li className={ ` ${active === "domaines-intervention" ? "active" : ""}` }> 
            <Link color="white" to="/domaines-intervention" onClick={() => toggler("showNav")}>Domaines</Link>
          </li>
          <li className={ ` ${active === "notre-expertise" ? "active" : ""}` }> 
            <Link color="white" to="/notre-expertise" onClick={() => toggler("showNav")}>Expertise</Link>
          </li>
          <li className={ `navProd ${active === "nos-experts" ? "active" : ""}`}> <span className="hsub-title">Nos experts</span>
            <div className="subnav">
              <Link to="/nos-experts" onClick={() => toggler("showNav")}> Notre Equipe </Link>
              <Link to="/nos-experts" onClick={() => toggler("showNav")}>Pr Hamdouraby SY </Link>
              <Link to="/nos-experts" onClick={() => toggler("showNav")}>Dr Alpha Boubacar DIALLO </Link>
              <Link to="/nos-experts" onClick={() => toggler("showNav")}>M. Simon Lazarre BADIANE </Link>
            </div>
          </li>
          <li className={`${  active === "contact" ? "active" : "" }`}>
           <Link color="white" to="/contact" onClick={() => toggler("showNav")}>Contact </Link>  
          </li>
        </ul>
      </div>
      <div className="collapse-nav" onClick={() => toggler("showNav")}>
        <MdMenu />
      </div>
      <div className="collapse-contacts">
        <div className="collapse-nav-contacts">
          <div className="ft-tel">
            <ul>
              <li className="tph-items"><a color="white" href={`mailto:${ contacts.email }`}>  <FaEnvelope /> <span> { contacts.email } </span> </a></li>
              <li className="tph-items"><a color="white" href={`tel:${ contacts.tel2 }`}>  <FaMobile /> <span> { contacts.tel2_label } </span> </a></li>
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
  )
}

const Header = ({ active="" }) => {
  const context = useContext(MainContext);
  const { state: { showTopbar, showNav }, toggler } = context;
  return(
    <>
    <header>
      <div className={`topBar ${ !showTopbar ? "showTopbar" : ""}`}>
        {/* <div className="toggler-bar" onClick={() => toggler("showTopbar")}>
          <FaCaretDown />
        </div> */}
        <div className="top container">
          {/* <div className="topLeft">
            <ul>
              <li className="tph-items"><a color="white" href={`mailto:${ contacts.email }`}>  <FaEnvelope /> <span> { contacts.email } </span> </a></li>
              <li className="tph-items"><a color="white" href={`tel:${ contacts.tel2 }`}>  <FaMobile /> <span> { contacts.tel2_label } </span> </a></li>
            </ul>
          </div>
          <div className="topRight">
            <div className="ft-socials">
              <ul>
                  <li><a href="https://www.linkedin.com" target="_blank"><FaLinkedinIn /> </a> </li>
                  <li><a href="https://www.facebook.com" target="_blank"><FaFacebookF /> </a> </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
            <div className="navbar-accueil">
              <div className="bottomBar">
              <div className="navbar-accueil-logo">
                <Fade bottom>
                  <img src="/logo.jpg" alt="Logo" />
                  <p>Conseil - Formation - Management - Etudes</p>
                </Fade>
              </div>
              <div className="navbar-accueil-navigation">
                <Navbar active={ active} toggler={ toggler } />
              </div>
            </div>
            </div>
        {/* {
          active === "accueil" ?
            <div className="navbar-accueil">
              <div className="bottomBar">
              <div className="navbar-accueil-logo">
                <img src="/logo.jpg" alt="Logo" />
                <p>Conseil - Formation - Management - Etudes</p>
              </div>
              <div className="navbar-accueil-navigation">
                <Navbar active={ active} toggler={ toggler } />
              </div>
            </div>
            </div>
          :  
          <div className="bottomBar">
            <Navbar active={ active} toggler={ toggler } />
          </div>
        } */}
    </header>
    <div className={`collapse-navbar ${ showNav && window.innerWidth < 712 ? "showNav" : "" }`}>
      <div className="close-menu" onClick={() => toggler("showNav")}>
        <MdClose />
      </div>
      <Navbar active={ active} toggler={ toggler } />
    </div>
    </>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}


export default Header
