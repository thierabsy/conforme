import React from "react"
import Slide from 'react-reveal/Slide';
// import { graphql, StaticQuery, Link } from "gatsby"
// import Slider from "react-slick"
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
// import Image from "../image"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MainContext from "../../context-api/MainContext";
import { nosproduits, contacts } from "../../data";
// import MySlider from "../widgets/MySlider";
import Whatsapp from "../../widgets/Whatsapp";
// import Image from "../image"


// const PrevBtn = () => (<button className="btna btna-left"> 
//         <FaChevronLeft /> 
//     </button>)
// const NextBtn = () => (<button className="btna btna-left"> 
//         <FaChevronRight /> 
//     </button>)

const HpProduits = () => {
    return(
        <MainContext.Consumer>
            {
                val => {
                    // const { stateAttribute } = val;
                    return ( 
                        <div className="hp-produits">
                            <div className="container">
                                <h3>Nos Produits</h3>
                                <p>Des poulets de qualité aux normes internationales. Livraison partout à Dakar!</p>
                                {/* <div className="hpb-items">
                                    <h3><span>Vitamines dans le Poulet</span></h3>
                                    <div className="hpbi hpbi-vitamines">
                                        <MySlider
                                            numbSlides={ vitamines.length }
                                            slideWidth={ 250 }
                                        >
                                            {
                                                vitamines.map((v, i) => <div key={"vitames-slider-" + i} className="slide-v">
                                                        <div className="slide-inner">
                                                            <h4> { v.title } </h4>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </MySlider>
                                    </div>
                                {/* // </div> */} 
                                <div className="hpp-items">
                                {
                                    nosproduits.map((v, i) => <Slide bottom key={"prod-slider-" + i}>    
                                        <div className="slide-p"> 
                                            <div className="band-top">
                                                <span  className="bb bb-green" /><span  className="bb bb-yellow" />
                                            </div>
                                            <img src={`/images/produits/${v.image}`} alt={ v.nom } />
                                            <div className="slide-inner">
                                                <div className="sli-left">
                                                    <span className="price">{v.prix}</span>
                                                </div>
                                                <div className="sli-right">
                                                    <h4> <span>{ v.nom }</span> </h4>
                                                    <div className="attr attr-prix"><span>Vente: </span>{ v.prix }</div>
                                                    {/* <div className="attr attr-poids"><span>Poids: </span>{ v.poids }</div> */}
                                                    <div className="attr attr-poids">
                                                        <span>Commandez: </span>    <Whatsapp 
                                                            img={ `images/produits/${v.image}` }
                                                            nom={ v.nom }
                                                        />
                                                    </div>
                                                    <div className="attr attr-poids">
                                                        <span>Appellez: </span>  <a href={`tel:${ contacts.tel }`} target="_blank">{ contacts.tel }</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="band-bottom">
                                                <span  className="bb bb-green" /><span  className="bb bb-yellow" />
                                            </div>
                                        </div>
                                        </Slide>
                                    )
                                }
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </MainContext.Consumer>
    )
}

export default HpProduits;