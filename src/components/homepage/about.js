// import React from "react"
// import { graphql, StaticQuery, Link } from "gatsby"
// import Img from "gatsby-image"
// import MainContext from "../../context-api/MainContext";
// // import Image from "../image"

// const About = () => (
//     <StaticQuery
//         query={graphql`
//            query {
//                 bienfait1: file(relativePath: { eq: "bienfait1.jpg" }) { 
//                     childImageSharp {
//                         fluid {
//                             ...GatsbyImageSharpFluid
//                         }
//                     }
//                 }
//             }
//         `}
//         render={ data => {
//             const { bienfait1 } = data;
//             return(
//                 <MainContext.Consumer>
//                     {
//                         val => {
//                             const { stateAttribute } = val;
//                             return (
//                                 <div className="about">
//                                     <div className="aboutInner container">
//                                         <div className="about-img">
//                                             <Img
//                                                 fluid={ bienfait1.childImageSharp.fluid }
//                                             />
//                                         </div>
//                                         <div className="about-text">
//                                             {/* <iframe 
//                                                 width="250" 
//                                                 height="300" 
//                                                 src="https://www.youtube.com/embed/WFnQxh7QhHw" 
//                                                 frameBorder="0" 
//                                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
//                                                 allowFullScreen
//                                             ></iframe> */}
//                                             <h3><span>Les Vertus de la Nutrition Chinoise</span> </h3>
//                                             <p>
//                                                 Les chinois ont toujours su que les plantes peuvent être utilisées pour fournir une bonne santé et faire en sorte que les personnes vivent sainement.
//                                             </p>
//                                             <p className="toHideSmall">
//                                                 La connaissance des plantes a été consignée il ya plus de 2000 ans dans le Huang- Ti Ching (l’empereur jaune : classique de médecine interne).
//                                                 En effet, le plus célèbre argument sur la santé affirme qu’ « il faut éliminer la maladie lorsqu’elle indique des symptômes apparents ». 
//                                                 Ceci est la base sur laquelle est fondée la médecine chinoise. 
//                                             </p>
//                                             <Link onClick={() => stateAttribute("tab", 1)} to="/emploi">En savoir plus</Link>
//                                         </div>
//                                         <div className="text-right">
//                                             <div className="text-wrapper">
//                                                 <div><h4>Voir nos offres:</h4></div>
//                                                 <div className="text-box">
//                                                     <Link to="/produits">Produits</Link>
//                                                     <Link to="/services">Services</Link> 
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="tiens_band tb-about">
//                                         <img
//                                             src="/images/bottom.png"
//                                             alt="Tiens band"
//                                         />
//                                     </div>
//                                 </div>
//                             )
//                         }
//                     }
//                 </MainContext.Consumer>
//             )
//         }
//         }
//     />
// )

// export default About;

