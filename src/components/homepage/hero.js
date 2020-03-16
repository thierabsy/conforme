import React from "react"
import Slide from 'react-reveal/Slide';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import {  Link } from "gatsby"
// import Img from "gatsby-image"
import Slider from "react-slick"
// import Image from "../image"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MainContext from "../../context-api/MainContext";

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
    return (
        <MainContext.Consumer>
            {
            val => {
            const { toggler } = val;
            return(
                <div className="hero">
                    <Slider {...settings}>
                        <div className="hero-slider">
                            <img src="/images/conseil_strategique.jpg" alt="Slide" />
                            <div className="hero-title">
                                <div className="container">
                                    <div className="ht-inner">
                                        <h3>Conseil stratégique</h3>
                                        <p>Formulation et mise en oeuvre de stratégies à court et long terme...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slider">
                            <img src="/images/gestion_projet.jpg"/>
                            <div className="hero-title">
                                <div className="container">
                                    <div className="ht-inner">
                                        <h3>Gestion de projet</h3>
                                        <p>Mise en place d'un cadre d'atteinte des objectifs de projet...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slider">
                            <img src="/images/gestion_risk.jpg" alt="Slide" />
                            <div className="hero-title">
                                <div className="container">
                                    <div className="ht-inner">
                                        <h3>Gestion des risques</h3>
                                        <p>Identification, évaluation et prioritisation des risques...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            )}}
        </MainContext.Consumer>
    )
}

export default Hero;