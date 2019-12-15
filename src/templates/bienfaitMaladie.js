import React from "react"
import Slide from 'react-reveal/Slide';
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Hero from "../components/homepage/hero";
import "../styles/catalog.scss"
import MainContext from "../context-api/MainContext";
import { bienfaits } from "../data";
import ProdModal from "../widgets/ProdModal";
import Slogan from "../components/Slogan";

const BienfaitPage = () => {

  const hpBienfaits = bienfaits.filter(b => b.type === "maladie");
    return( 
        <MainContext.Consumer>
            {
                val => {
                    const { state: { showModal }, stateAttribute, toggler } = val;
                    // console.log("currentProduct", currentProduct)
                    return(
                        <Layout active="bienfaits">
                            {/* <ProdModal /> */}
                            { showModal && <ProdModal /> }
                            <div className="mainwrapper bienfaits-page">
                                {/* <div className="top-band tb-product" /> */}
                                <div className="container">  
                                  <Slide bottom>
                                    <Slogan />   
                                  </Slide>
                                  {/* <div className="innerContainer">      */}
                                    <SEO title="Bienfaits sur la santé" />
                                    <Slide bottom>
                                    <div className="product-header">
                                      <h1>Les Bienfaits de la Viande de Poulet sur votre santé</h1>
                                    </div>
                                    <div className="separator-band" />
                                    </Slide>
                                    <div className="product-grid">
                                    {/* <Hero />     */}
                                    {
                                        hpBienfaits.map((p, i) => <Slide bottom key={"product--" + i}>
                                          <div className="sp-product">
                                          <div className="sp-img">
                                            <img src={`/images/${p.image}`} alt={ p.title } />
                                          </div>
                                          <div className="sp-text">
                                              <h4> <span>{ p.title }</span> </h4>
                                              <p> { p.description.slice(0,250) }... </p>
                                              <div className="btn">
                                                <button onClick={() => [ toggler("showModal"), stateAttribute('currentProduct', p)]}>Lire plus...</button>
                                              </div> 
                                          </div>
                                      </div>
                                      </Slide>)
                                    }
                                    </div>
                                   
                                  {/* </div> */}
                                </div>
                            </div>
                        </Layout>
                    )
                }
            }
        </MainContext.Consumer>
    )
}

export default BienfaitPage
