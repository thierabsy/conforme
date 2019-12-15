import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaSpa, FaRegPlusSquare, FaRegMinusSquare} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/emploi.scss"
import MainContext from "../context-api/MainContext";
// import { toggler } from "../context-api/functions/layout_func";

const EmploiPage = () => (
    <StaticQuery 
        query= {graphql`
        query {
          president: file(relativePath: { eq: "president1.jpg" }) {
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          medecine: file(relativePath: { eq: "medecine-c.jpg" }) {
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
        render= { data =>  (
            <MainContext.Consumer>
                {
                    val => {
                        const { state: { tab, showMore }, stateAttribute, toggler } = val;
                        return(
                            <Layout active="emploi">
                                <SEO title="Emploi" />
                                <div className="mainwrapper">
                                    <div className="top-band tb-contact" />
                                    <div className="container">   
                                        <div className="innerContainer">   
                                            <h3>Collaborer avec Tiens</h3>  
                                            <div className="page-grid">   
                                                <div className="text-left">
                                                    <ul>
                                                        <li className={ tab === 1 ? "activeTab" : ""} onClick={() => stateAttribute("tab", 1)} >
                                                            A propos de Tiens
                                                        </li>
                                                        <li className={ tab === 2 ? "activeTab" : ""} onClick={() => stateAttribute("tab", 2)} >
                                                            Etre partenaire
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="text-right">
                                                    <div className="tr-slides">
                                                        <div className={`tr-slide trs-apropos ${tab === 1 ? "activeTab" : "notActive"}`}>
                                                            <h4> <span>A propos de Tiens:</span> </h4>
                                                            <div className="president">
                                                                <Img
                                                                    fluid = { data.president.childImageSharp.fluid }
                                                                />
                                                            </div>
                                                            <p>
                                                                Fondée à l’origine en 1995 par Monsieur Li Jinyuan, le siège du Group Tiens partage les mêmes locaux que le centre Hendersen de Beijing. La principale usine est située au sein des Entreprises des Nouvelles Technologies dans la zone de développement de Wuqing. Cela couvre une superficie totale de 1,72 millions de mètres carrés avec une zone d’immeuble de 770.000 mètres carrés. Sa capitalisation s’élève à 2,1 milliards de RMB.  
                                                            </p>
                                                            <p>
                                                                Le Group Tiens comme géant de la santé est fort de plus de 5000 ans de médecine chinoise de même que de pratique nutritionnelle comprenant les dernières recherches scientifiques de pointe et les technologies derniers cris biotechnologiques qui, constamment contribuent à porter le développement des soins médicaux traditionnels à leurs plus hauts niveaux. Tiens s’est développé pour devenir un des plus grands fabricants de produits à base d’herbes dans le monde aujourd’hui.
                                                            </p>
                                                            <h5>
                                                                <span>Vision et mission</span> Deux clés pour la réussite
                                                            </h5>
                                                            <div className="text-vis-mis">
                                                                <div className="text-vm vision">
                                                                    <h6>Vision de tiens <FaSpa /></h6>
                                                                    <p>Fournir aux consommateurs de par le monde des produits de qualité et des opportunités d’éducation afin d’améliorer leur qualité de vie et de construire une société internationale harmonieuse</p>
                                                                </div>
                                                                <div className="text-vm mission">
                                                                    <h6>Mission de tiens <FaSpa /></h6>
                                                                    <p>Etre à l’avant-garde du secteur mondial de la vente directe. </p>
                                                                </div>
                                                            </div>
                    
                                                            <div className="divider" />
                                                            <div>
                                                                <div className="img-med-ch">
                                                                    <Img
                                                                        fluid = { data.medecine.childImageSharp.fluid }
                                                                    />
                                                                </div>
                                                                <p>
                                                                    Les chinois ont toujours su que les plantes peuvent être utilisées pour fournir une bonne santé et faire en sorte que les personnes vivent sainement.
                                                                </p>
                                                                <p>
                                                                    La connaissance des plantes a été consignée il ya plus de 2000 ans dans le Huang- Ti Ching (l’empereur jaune : classique de médecine interne).maintenant, ce livre et son contenu ont un écho significatif aussi bien en orient et, de façon exponentiel dans les cercles médicaux occidentaux. En effet, le plus célèbre argument du livre affirme qu’ « il faut éliminer la maladie lorsqu’elle indique des symptômes apparents ». Ceci est la base sur laquelle est fondée la médecine chinoise. 
                                                                </p>
                                                                <p>
                                                                    La citation suivante est de Zhu Ming, traducteur du Huang-Ti Nei, qui a souligné l’importance grandissante de la médecine traditionnelle chinoise dans la société occidentale ; avec la rapide expansion de la politique chinois d’ouverture, les échanges culturels entre l’Est et l’Ouest sont fortement stimulées. La médecine   chinoise attire de pus en plus l’intérêt. De nos jours. Dés lors il est inévitable de comprendre la médecine de l’ancienne Asie orientales combinée aux connaissances modernes de la médecine occidentale pour former un tout glorieux, que nos contemporains et les générations pourront apprécier comme une grande contribution à la cause de la santé humaine. 
                                                                </p>
                                                                <p>
                                                                    Les alicaments ne sont  pas des médicaments. Ce sont des compléments alimentaires indispensables à notre organisme.
                                                                </p>

                                                            </div>
                                                        </div>
                                                        <div className={`tr-slide trs-partenaire ${tab === 2 ? "activeTab" : "notActive"}`}>
                                                            <h4><span>Partenaire</span></h4>
                                                            <h5>A propos des produits Tiens: </h5>
                                                            <div className={`expand ${ showMore ? "showmore" : ""}`}>
                                                                <p>Il est important de noter que tous les produits de santé de Tiens sont des produits naturels qui n’ont aucun effet secondaire sur l’organisme. </p>
                                                                <p>En Russie, le Thé équilibre a été approuvé comme produit de choix pour éliminer l’excès de cholestérol dans le corps.</p>
                                                                <p>Au Japon, le Chitosan a été adopté comme produit de choix pour améliorer la qualité de vie et a été cité comme un anti-cancérigène. En outre, en Amérique, les produits de sont des produits de choix pour prévenir l’ostéoporose et comme produits spéciaux pour la NASA avant et pendant les vols spatiaux.</p>
                                                                <p>Au Nigéria, l’Agence Nationale pour l’Administration et le Contrôle de la Nourriture et des Médicaments (NAFDAC) a non seulement approuvé les produits de santé de Tiens fortement efficaces pour lutter contre les problèmes de santé mais a également désigné Tiens pour inspecter et analyser tous les médicaments importés de la Chine et qui sont destinés au Nigéria. Ceci veut dire que Tiens doit d’abord certifier n’importe quel médicament importé de la Chine comme étant de bonne qualité avant que la NAFDAC n’appose son cachet. </p>
                                                                <p>Au Bénin, Tiens a reçu l’agrément de la Direction de l’Alimentation et de la Nutrition Appliquée (D.A.N.A). </p>
                                                                <p>En Amérique, les produits de Tiens ont reçu l’agrément du Foods and Drugs Administration (FDA). L’Institut International en Astronomie et en Aviation (NASA) a soutenu que les produits de Tiens aident à prolonger la vie des astronautes et des plongeurs. De même, l’Association Internationale de la Croix Rouge a approuvé les produits de Tiens en tant que produits spéciaux de secours.</p>
                                                            </div>
                                                            <div className="expand-bar">
                                                                <span className="btn-expand" onClick={() => toggler("showMore")} >
                                                                    { 
                                                                        !showMore ? <><span>Voir plus</span> <FaRegPlusSquare /> </> :
                                                                        <> <span>Voir moins</span> <FaRegMinusSquare /> </>
                                                                    }
                                                                    </span>
                                                            </div>
                                                            <h5>Processus d'intégration simple:</h5>
                                                            <ul className="process">
                                                                <li> <span>1</span> Donner une subscription de 12.500 FCFA</li>
                                                                <li> <span>2</span> Acheter des produits avec une réduction de 14%</li>
                                                                <li> <span>3</span> Parrainer d'autres personnes = développer votre réseau</li>
                                                                <li> <span>4</span> Gagner des points => réduction de prix d'achat</li>
                                                                <li> <span>5</span> Votre réseau travail pour vous</li>
                                                            </ul>
                                                        </div>       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Layout>
                        )
                    }
                }
            </MainContext.Consumer>
        )
        }
    />
)
  
export default EmploiPage
