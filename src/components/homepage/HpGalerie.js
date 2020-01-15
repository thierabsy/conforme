import React, { useContext } from "react"
import Slide from 'react-reveal/Slide';
import { galerie } from "../../data/galerie";
import ModalGalerie from "../ModalGalerie";
import MainContext from "../../context-api/MainContext";
import { Link } from "gatsby";

const HpGalerie = () => {
    const context = useContext(MainContext);
    const { state: { modalType, modalGalerieImages, activeGalerieImage }, stateAttribute }= context; 
    return ( 
        <div className="hp-galerie">
            <ModalGalerie type="hp-galerie" />
            <div className="container">
               <Slide bottom>
                    <div className="hpb-header">
                        <h3><span>Nos Réalisations</span></h3>
                    </div>
               </Slide>
                <div className="hpb-items">
                    {
                        galerie.slice(0, 3).map(item => <div key={"hp-gal-" + item.id} className="hpg-slide">
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
                <Slide bottom>
                    <div className="hpb-voirplus">
                        <button className="btn"><Link to="/galerie">Découvrir plus</Link>  </button>
                    </div>
               </Slide>
            </div>
        </div>
    )
}

export default HpGalerie;

