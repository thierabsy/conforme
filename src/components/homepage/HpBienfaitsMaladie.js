import React from "react"
import { Link } from "gatsby"
// import Slider from "react-slick"
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MainContext from "../../context-api/MainContext";
import { bienfaits } from "../../data";
import MySlider from "../widgets/MySlider";
import Slogan from "../Slogan";
// import Image from "../image"

const HpBienfaitsMaladie = () => {

    const hpBienfaits = bienfaits.filter(b => b.type === "maladie");

    return(
        <MainContext.Consumer>
            {
                val => {
                    // const { stateAttribute } = val;
                    return ( 
                        <div className="hp-recettes">
                            <div className="container">
                                <Slogan />
                                <h3>Santé - Le Poulet:</h3>
                                <p className="p-header">Le fait de manger la viande de poulet contribuer à améliorer votre santé.</p>
                                
                                <div className="hpb-items">
                                    <div className="hpbi hpbi-recettes">
                                        <MySlider
                                            numbSlides={ hpBienfaits.length }
                                            slideWidth={ 255 }
                                            sliderId="HpBienfaitsMaladie"
                                        >
                                            {
                                                hpBienfaits.map((v, i) => <div key={"prod-slider-" + i} className="slide-p">
                                                        <div className="slide-inner">
                                                            <div className="sp-img">
                                                                <img src={`/images/${v.image}`} alt={ v.title } />
                                                            </div>
                                                            <div className="slide-text">
                                                                <h4> <span>{ v.title }</span> </h4>
                                                                <p className="st-description">{ v.description && v.description.slice(0, 42) }</p>
                                                                <Link to="/bienfaits">En savoir plus</Link>
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

export default HpBienfaitsMaladie;