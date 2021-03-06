import React from "react"
import Fade from 'react-reveal/Fade';
import Slider from "react-slick"
// import Image from "../image"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    // fade: true,
    speed: 1000,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Hero = () => {
    return(
        <div className="hero">
        <div className="container">
            <img src="/images/map.png" alt="Slide" />
                {/* <div className="hero-slider-wrapper"> */}
                    <div className="hero-slider-list"> 
                    <Slider {...settings}> 
                        <div className="hero-slider">
                            <div className="hero-title">
                            <Fade bottom>
                                <div className="ht-inner">
                                    <h3>Conseil stratégique</h3>
                                    <p>Formulation et mise en oeuvre de stratégies à court et long terme...</p>
                                </div>
                            </Fade>
                            </div>
                        </div>
                        <div className="hero-slider">
                            <div className="hero-title">
                            <Fade bottom>
                                <div className="ht-inner">
                                    <h3>Gestion de projet</h3>
                                    <p>Mise en place d'un cadre d'atteinte des objectifs de projet...</p>
                                </div>
                            </Fade>
                            </div>
                        </div>
                        <div className="hero-slider">
                            <div className="hero-title">
                            <Fade bottom>
                                <div className="ht-inner">
                                    <h3>Gestion des risques</h3>
                                    <p>Identification, évaluation et prioritisation des risques...</p>
                                </div>
                            </Fade>
                            </div>
                        </div>
                        </Slider> 
                    {/* </div>   */}
                </div>
        </div>
        </div>
    )}
export default Hero;