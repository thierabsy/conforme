import React from "react"
import Img from "gatsby-image"
import { FaWindowClose } from "react-icons/fa"

import { contacts } from "../data/contact"
import MainContext from "../context-api/MainContext";

const ProdModal = ({ category = "" }) => (
  <MainContext.Consumer>
      {
          val => {
              const { state: { currentProduct, currentImg, cursorPos }, stateAttribute, toggler, toXOF } = val;
              const cp = currentProduct;
              return(
                <div className="ProdModal"
                    style={{ 
                        // left: cursorPos.X + "px", 
                        // top: cursorPos.Y + "px", 
                        // // width: 0, 
                        // // height: 0, 
                        // overflow: "hidden"
                    }}
                >
                    <div className="mod-overlay" onClick={ () => toggler("showModal") } />
                    <div className="mod-content">
                        <div className="mod-side mod-left">
                            <h4> { cp.nom } <span className="mod-price">{ toXOF(cp.prix) }</span> </h4>
                            <div className="mod-img">
                                <div className="modi-wrapper">
                                    <div className="modi-slides"
                                        style={{ transform: `translateX(-${ (currentImg * 100) / (cp.images ? cp.images.length : 1) }%)` }}
                                    >
                                        {
                                            cp.images && cp.images.map( (img, i) => 
                                                <div  key={ "img-" + i }
                                                    className="img-slide"
                                                >
                                                    <Img
                                                        fluid={ img.childImageSharp.fluid }
                                                    />
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="mod-dots">
                                {
                                    cp.images && cp.images.map( (img, i) => 
                                        <div key={ "dot-" + i }
                                            className={ `dot ${currentImg === i ? "active" : ""}` }
                                            onClick={() => stateAttribute("currentImg", i)}
                                        > { i + 1 } </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="mod-side mod-right">
                            <div className="mod-close" onClick={ () => toggler("showModal") } > <FaWindowClose /></div>
                            {/* <h4> { cp.category } </h4> */}
                            <h6> Contenu: </h6>
                            <p>{ cp.contenu }</p>
                            <h6> Utilisation: </h6>
                            <p> { cp.utilisation } </p>
                            <h6> Description: </h6>
                            <p> { cp.description } </p>
                            <div> { cp.contre_indication !== "" && <> <h6> Contre indication: </h6><p> { cp.contre_indication } </p> </> } </div>

                        </div>
                    </div>
                </div>
              )
          }
      }
  </MainContext.Consumer>
)


export default ProdModal
