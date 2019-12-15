// import React from "react"
// import { graphql } from "gatsby"
// import { FaCapsules } from "react-icons/fa"
// import Img from "gatsby-image"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import "../styles/catalog.scss"
// import MainContext from "../context-api/MainContext";
// import { toXOF } from "../context-api/functions/utils";
// import ProdModal from "../widgets/ProdModal";

// const ServicesPage = ({ data: { allProduitsJson }}) => {
//     const { edges } = allProduitsJson;
//     return( 
//         <MainContext.Consumer>
//             {
//                 val => {
//                     const { state: { showModal, current }, stateAttribute, toggler } = val;
//                     return(
//                         <Layout active="services">
//                             { showModal && <ProdModal />}
//                             <div className="mainwrapper">
//                                 <div className="top-band tb-service" />
//                                 <div className="container">     
//                                   <div className="innerContainer">     
//                                     <SEO title="Services" />
//                                     {/* <Hero />     */}
//                                     {
//                                         edges.map( edge => {
//                                             const p = edge.node;
//                                             return(
//                                               <div key={ p.id } className="category">
//                                                   <h3><FaCapsules /> { p.category } </h3>
//                                                   <p> { p.description } </p>
//                                                   <h6>Produits:</h6>
//                                                   <ul className="items-grid" >
//                                                     {
//                                                       p.produits.map(prod => (
//                                                         <li key={ prod.prod_id }
//                                                           onClick={ e => [
//                                                             stateAttribute("currentProduct", { category: p.category, ...prod}),
//                                                             toggler("showModal")
//                                                             // stateAttribute("cursorPos", { X: e.clientX, Y: e.clientY})
//                                                           ]}
//                                                         >
//                                                           <div className="prod-inner">
//                                                             <div className="prod-img">
//                                                               <div className="prodi-wrapper">
//                                                                 <Img
//                                                                   fixed={ prod.images[0].childImageSharp.fixed }
//                                                                 />
//                                                               </div>
//                                                             </div>
//                                                             <div className="prod-text">
//                                                               <h5> 
//                                                                 { prod.nom } { prod.nom !== prod.nom2 && <span>({ prod.nom2 })</span>} 
//                                                               </h5>
//                                                               <h6> { prod.contenu } </h6>
//                                                               <p> { prod.excerpt && prod.excerpt.substr(0, 100) }{ prod.excerpt && prod.excerpt.length > 100 && "..." } </p>
//                                                               <p className="prod-price"> <span>{ toXOF(prod.prix) }</span> </p>
//                                                             </div>
//                                                           </div>
//                                                         </li>
//                                                       ))
//                                                     }
//                                                   </ul>
//                                               </div>
//                                             )
//                                         })
//                                     }
//                                   </div>
//                                 </div>
//                             </div>
//                         </Layout>
//                     )
//                 }
//             }
//         </MainContext.Consumer>
//     )
// }

// export default ServicesPage

// export const query = graphql`
//   query {
//     allProduitsJson{
//         edges{
//             node{
//               id
//               category
//               description
//               produits{
//                 prod_id
//                 nom
//                 nom2
//                 prix 
//                 contenu
//                 utilisation
//                 description
//                 contre_indication
//                 excerpt
//                 images{
//                   childImageSharp{
//                     fixed(width: 125, height: 175){
//                       ...GatsbyImageSharpFixed
//                     }
//                     fluid{
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//             }
//           }
//       }
//   }
// `