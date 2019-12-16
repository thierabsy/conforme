import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaEnvelope, FaMobile, FaHome} from "react-icons/fa"

import { contacts } from "../data/contact" 
// import Social from "../widgets/socials";
import MainContext from "../context-api/MainContext";

const Header = ({ active="" }) => (
  <MainContext.Consumer>
    {
      val => {
        const { state: { showTopbar }, toggler } = val;
        return(
          <header>
            <div className={`topBar ${ !showTopbar ? "showTopbar" : ""}`}>
              {/* <div className="toggler-bar" onClick={() => toggler("showTopbar")}>
                <FaCaretDown />
              </div> */}
              <div className="top container">
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
            </div>
            <div className="bottomBar">
              <div className="top container">
                <div className="topRight">
                  <Link to="/">
                    <img src="/logo.png" alt="Logo" />
                  </Link>
                </div>
                <div className="topLeft navigation">
                  <ul>
                    <li className={ `${active === "accueil" ? "active" : ""}` }> <Link color="white" to="/">Accueil </Link></li>
                    <li className={ `navProd ${active === "apropos" ? "active" : ""}`}> <Link to="/apropos-ags-immo"> A Propos </Link></li>
                    <li className={ ` ${active === "nos-services" ? "active" : ""}` }> <Link color="white" to="/nos-services">Nos Services </Link></li>
                    <li className={`contact ${  active === "contact" ? "active" : "" }`}> <Link color="white" to="/contact">Contact </Link>  </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        )
      }
    }
  </MainContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}


export default Header
