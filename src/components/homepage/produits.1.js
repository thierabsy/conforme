// import React from "react"
// import { graphql, StaticQuery, Link } from "gatsby"
// import Img from "gatsby-image"
// // import Image from "../image"

// const Produits = () => (
//     <StaticQuery
//         query={graphql`
//            query {
//                 bienfait1: file(relativePath: { eq: "prod.jpg" }) {
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
//             const { bienfait1, allProduitsJson } = data;
//             return(
//             <div className="prod-services"> 
//                 <div className="prodServInner container">
//                     <div className="ps-side ps-left">
//                         <div>
//                             <Img
//                                 fluid={ bienfait1.childImageSharp.fluid }
//                             />
//                         </div>
//                         <div className="voir-tous"> <Link to="/produits">Voir tous les produits</Link> </div>
//                     </div>
//                     <div className="ps-side ps-right">
//                         <div className="ps-text-top">
//                             <h3><span>Nos Produits:</span></h3>
//                             <p>
//                                 La carence alimentaire est à la base des plus graves maladies de la dernière moitié du dernier siècle comme l’arthrite chronique, la sénilité, le diabète, l’obésité, les maladies cardio-vasculaires et l’ostéoporose. 
//                             </p>
//                             <p>
//                                 Nous disposons d'une large gamme de produits et d'appareils pour désintoxiquer, ajuster, reapprovisionner, prévenir.
//                             </p>
//                         </div>
//                         <div className="ps-text-bottom">
//                             <h4>Voir nos offres:  <Link to="/produits">Voir tous les produits</Link></h4>
//                             <div className="ps-text-gallery">
//                             {
//                                 allProduitsJson &&
//                                 allProduitsJson.edges.map(edge => {
//                                     const p = edge.node;
//                                     return(
//                                         <div key={ p.id } className="produit">
//                                             {/* <Link to={`/produits/${ p.category }`}> */}
//                                             <Link to={`/produits`}>
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
//                 </div>
//             </div>
//         )}}
//     />
// )

// export default Produits;
 
