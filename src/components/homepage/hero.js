import React from "react"
import Slide from 'react-reveal/Slide';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { StaticQuery, graphql, Link } from "gatsby"
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
    fade: true,
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Hero = () => (
    <StaticQuery
        query= {graphql`
            query{
                site{
                    siteMetadata{
                        title
                    }
                }
                allHeroJson{
                    edges{
                        node{ 
                            id
                            img{
                                childImageSharp{
                                  fluid(maxWidth: 1001, maxHeight: 350){
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                        }
                    }
                }
            }
        `}
        render={ data => {
            // const { title } = data.site.siteMetadata;    
            // const { edges } = data.allHeroJson;  
            return (
                <MainContext.Consumer>
                    {
                        val => {
                            const { toggler } = val;
                            return(
                                <div className="hero">
                                    <Slider {...settings}>
                                        <div className="hero-slider">
                                            <img src="/images/achat-maison.jpg" alt="Slide" />
                                            <div className="hero-title">
                                                <div className="container">
                                                    <div className="ht-inner">
                                                        <span> Achat de maison</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hero-slider">
                                            <img src="/images/vente-villa.jpg"/>
                                            <div className="hero-title">
                                                <div className="container">
                                                    <div className="ht-inner">
                                                        <span>Vente de villa</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hero-slider">
                                            <img src="/images/gerance-maison.jpg" alt="Slide" />
                                            <div className="hero-title">
                                                <div className="container">
                                                    <div className="ht-inner">
                                                        <span>Gérance de Location</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div><img src="/slide1.jpg"/></div>
                                        <div><img src="/slide2.jpg"/></div>
                                        <div><img src="/slide3.jpg"/></div> */}

                                        {/* {
                                            edges &&
                                            edges.map( edge => {
                                                const slide = edge.node;
                                                return(
                                                    <div key={slide.id}  height="500px">
                                                        <Img
                                                            fluid={ slide.img.childImageSharp.fluid }
                                                        />
                                                    </div>
                                                )
                                            })
                                        } */}
                                    </Slider>
                                    <div className="heroInner">
                                        <div className="container">
                                            <div className="heroText">
                                                <h3>Conseil et Gestion Immobilière</h3>
                                                <p>Bénéficier d'opportuninés uniques dans l'achat, la vente, la gérance, location et tous vos besoins dans l'immobilier.</p>
                                                <div className="btn-contact">
                                                    <button onClick={ () => toggler("showContact")}><FaEnvelopeOpenText /> Nous Contacter</button>
                                                </div>
                                            </div>
                                            <div className="btn-contact btn-mobile">
                                                <Slide>
                                                    <button onClick={ () => toggler("showContact")}><FaEnvelopeOpenText /> Nous Contacter</button>
                                                </Slide>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                </MainContext.Consumer>
            )}}
    />
)

export default Hero;