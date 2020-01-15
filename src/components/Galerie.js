import React, { useContext } from "react"
import Slide from 'react-reveal/Slide';
import Layout from "../components/layout"
import SEO from "../components/seo"
import ModalGalerie from "../components/ModalGalerie"
// import Hero from "../components/homepage/hero";
import "../styles/galerie.scss"
import MainContext from "../context-api/MainContext";
// import { toXOF } from "../context-api/functions/utils";
import { galerie } from "../data/galerie";

const ProductsPage = () => {
  const context = useContext(MainContext);
  const {  stateAttribute } = context;
      return(
        <div className="mainwrapper galerie-page">
        <SEO title="Galerie" />
          <ModalGalerie type="hp-galerie" />
                <div className="nos-services-banner">
                  {/* <img src="/images/pattern1.jpg" alt="Galerie Ags Immo" /> */}
                  <div className="nsb-text">
                    <div className="container">   
                      <h2>AGS Immo: Galerie</h2>
                      <p>Quelques unes de nos réalisations</p>
                    </div>
                  </div>
                </div>
                <div className="container">   
                    <div className="galerie-grid">
                    <div className="hpb-items">
                    {
                        galerie.map(item => <div key={"hp-gal-" + item.id} className="hpg-slide">
                            <Slide bottom>
                                <div className="hps-wrapper">
                                    <div className="hps-img">
                                        <img src={`/images/galerie/${ item.images[0] }`} alt={ item.label } />
                                        <span className="open-galerie" 
                                            onClick={() => [
                                                stateAttribute("modalGalerieImages", item.images),
                                                stateAttribute("activeGalerieImage", item.images[0]),
                                                stateAttribute("modalType", "hp-galerie"),
                                            ]}
                                        >Voir plus</span>
                                    </div>
                                    <div className="hps-inner">
                                        <h3> <span> { item.label } </span> </h3>
                                        <p> { item.description } </p>
                                    </div>
                                </div>
                            </Slide>
                        </div>)
                        }
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductsPage
