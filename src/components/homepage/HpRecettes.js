import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Slider from "react-slick"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MainContext from "../../context-api/MainContext";
import { nosproduits } from "../../data/nosproduits";
import MySlider from "../widgets/MySlider";
// import Image from "../image"

const HpRecettes = () => {
    return(
        <MainContext.Consumer>
            {
                val => {
                    const { stateAttribute } = val;
                    return ( 
                        <div className="hp-recettes">
                            <div className="container">
                                <h3>Recettes à base de Poulets:</h3>
                                <p>Il existe plus d'une centaine de recettes à base de poulet allant des appetizers aux repas complets.</p>
                                
                                <div className="hpb-items">
                                    <div className="hpbi hpbi-recettes">
                                        <MySlider
                                            numbSlides={ nosproduits.length }
                                            slideWidth={ 250 }
                                            sliderId="HpRecettes"
                                        >
                                            {
                                                nosproduits.map((v, i) => <div key={"prod-slider-" + i} className="slide-p">
                                                        <div className="slide-inner">
                                                            <div className="sp-img">
                                                                <img src={`/images/${v.image}`} alt={ v.nom } />
                                                            </div>
                                                            <div className="slide-text">
                                                                <h4> <span>{ v.nom }</span> </h4>
                                                                <div className="attr attr-prix">{ v.description && v.description.slice(0, 42) }</div>
                                                                <Link to="/recettes">Voir plus</Link>
                                                            </div>
                                                            {/* <div className="band-bottom">
                                                                <span  className="bb bb-green" /><span  className="bb bb-yellow" />
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </MySlider>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    )
                }
            }
        </MainContext.Consumer>
    )
}

export default HpRecettes;