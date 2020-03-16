import React, { useContext } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Contact from "./Contact"
import Footer from "./footer"
import "./layout.css"
import "../styles/shared.scss"
import MainContext from "../context-api/MainContext";

const Layout = ({ children, active="" }) => {
  const context = useContext(MainContext);
  const { state: { showContact } } = context;
  return(
    <>
      { showContact && <Contact /> }
      <Header  active={ active } />
      <main>{children}</main>
      <Footer />
    </>
)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
