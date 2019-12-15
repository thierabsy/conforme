import React from "react"
// import Img from "gatsby-image"
import { FaWindowClose } from "react-icons/fa"

// import { contacts } from "../data/contact"
import MainContext from "../context-api/MainContext";

const ProdModal = () => (
  <MainContext.Consumer>
      {
          val => {
              const { state: { currentProduct }, toggler } = val;
              const cp = currentProduct;
              return(
                <div className="ProdModal">
                    <div className="mod-overlay" onClick={ () => toggler("showModal") } />
                    <div className="mod-content">
                        <div className="mod-side mod-left">
                            {/* <h4> Santé </h4> */}
                            <div className="mod-img">
                               <img src={`/images/${cp.image}`} alt={ cp.title } />
                            </div>
                        </div>
                        <div className="mod-side mod-right">
                            <div className="mod-close" onClick={ () => toggler("showModal") } > <FaWindowClose /></div>
                            <h3><span>{ cp.title }</span></h3>
                            <p> { cp.description } </p>
                            <div className="source">
                                <span>Source:</span> 
                                <a href={ cp.src }  target="_blank">
                                    { cp.source }
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
              )
          }
      }
  </MainContext.Consumer>
)


export default ProdModal
