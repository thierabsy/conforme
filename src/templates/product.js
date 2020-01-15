import React from "react"
import Slide from 'react-reveal/Slide';

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/catalog.scss"
import MainContext from "../context-api/MainContext";
import { nosservices, contacts } from "../data";
import ProdModal from "../widgets/ProdModal";

const ProductsPage = () => {
    return( 
        <MainContext.Consumer>
            {
                val => {
                    const { state: { showModal } } = val;
                    return(
                        <Layout active="nos-services">
                            { showModal && <ProdModal /> }
                            <div className="mainwrapper product-page">
                                <div className="nos-services-banner">
                                  <img src="/images/confiance-agsimmo.jpg" alt="Confiance Ags Immo" />
                                  <div className="nsb-text">
                                    <div className="container">   
                                      <h2>AGS Immo: Nos Services</h2>
                                      <p>Services de qualité en toute confiance</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="container">   
                                    <SEO title="Nos Services" />
                                    <div className="product-grid">
                                    {
                                      nosservices.map((p, i) => <Slide bottom key={"product--" + i}>
                                      <div className="sp-product">
                                          <div className="sp-img">
                                            <img src={`/images/${p.image}`} alt={ p.nom } />
                                          </div>
                                          <div className="sp-text">
                                            <div className="spt spt-left">
                                              <h4> <span>{ p.nom }</span> </h4>
                                              <p> { p.excerpt } </p>
                                              <div className="spt-flip">
                                                 Voir plus
                                              </div>
                                              <div className="spt-icon">
                                                <img src={`/images/icons/${p.icon}`} alt={ p.nom } />
                                              </div>
                                            </div>
                                            <div className="spt spt-right">
                                              <h4> <span>{ p.nom }</span> </h4>
                                              {
                                                p.description && p.description.length > 0 && 
                                                p.description.map((desc, idx) => <p key={"desc" + idx}> { desc } </p>)
                                              }
                                              <div className="spt-icon">
                                                <img src={`/images/icons/${p.icon2}`} alt={ p.nom } />
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                      </Slide>
                                      )
                                    }
                                    </div>
                                </div>
                            </div>
                        </Layout>
                    )
                }
            }
        </MainContext.Consumer>
    )
}

export default ProductsPage
