// import React from "react"
// import { graphql, StaticQuery, Link } from "gatsby"
// import Img from "gatsby-image"
// // import Image from "../image"

// const Services = () => (
//     <StaticQuery
//         query={graphql`
//            query {
//                 services: file(relativePath: { eq: "zen3.png" }) {
//                     childImageSharp {
//                         fluid {
//                             ...GatsbyImageSharpFluid
//                         }
//                     }
//                 }
//                 allProduitsJson{
//                     totalCount
//                     edges{
//                         node{
//                             id
//                             category
//                             img {
//                                 childImageSharp {
//                                     fixed(width: 100, height: 70) {
//                                         ...GatsbyImageSharpFixed
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         `}
//         render={ data => {
//             const { services, allProduitsJson } = data;
//             return(
//             <div className="prod-services services">
//                 <div className="tiens_band tb-services">
//                     <img
//                         src="/images/bottom.png"
//                         alt="Tiens band"
//                     />
//                 </div>
//                 <div className="prodServInner container">
//                     <div className="ps-side ps-right">
//                         <div className="ps-text-top">
//                             <h3><span>Nos Services:</span></h3>
//                             <p>
//                                 La carence alimentaire est à la base des plus graves maladies de la dernière moitié du dernier siècle comme l’arthrite chronique, la sénilité, le diabète, l’obésité, les maladies cardio-vasculaires et l’ostéoporose. 
//                             </p>
//                             <p>
//                                 Nous disposons d'une large gamme de produits et d'appareils pour désintoxiquer, ajuster, reapprovisionner, prévenir.
//                             </p>
//                         </div>
//                         <div className="ps-text-bottom">
//                             <h4>Voir nos offres:</h4>
//                             <div className="ps-text-gallery">
//                             {
//                                 allProduitsJson &&
//                                 allProduitsJson.edges.map(edge => {
//                                     const p = edge.node;
//                                     return(
//                                         <div key={ p.id } className="produit">
//                                             <Link to={`/services`}>
//                                                 {
//                                                     p.img && 
//                                                     <Img
//                                                         fixed={ p.img.childImageSharp.fixed }
//                                                         alt={ p.category } 
//                                                     />
//                                                 }
//                                                 <h5>{ p.category }</h5>
//                                             </Link>
//                                         </div>
//                                     )
//                                 })
//                             }
//                             </div>
//                         </div>
//                     </div>
//                     <div className="ps-side ps-left" style={{ backgroundImage: "url(/images/patterns/pattern3.jpg)"}}>
//                         <div className="ps-left-imgWrapper">
//                             <img 
//                                 src="/images/zen3.png"
//                                 alt="Services"
//                                 className="ps-left-img"
//                             />
//                         </div>
//                         <div className="voir-tous"> <Link to="/services">Voir tous nos services</Link> </div>
//                     </div>
//                 </div>
//             </div>
//         )}}
//     />
// )

// export default Services;

