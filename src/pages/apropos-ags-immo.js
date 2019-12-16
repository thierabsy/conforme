import React from "react"
import HpLocalites from "../components/homepage/HpLocalites";

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/emploi.scss"
import MainContext from "../context-api/MainContext";
import Slogan from "../components/Contact";
import { nosservices } from "../data";
import Modal from "../components/Modal";

const AproposPage = () => {
   return(
    <MainContext.Consumer>
        {
            val => {
                const { state: { modalType }, stateAttribute } = val;
                return(
                    <Layout active="apropos">
                        <SEO title="A Propos d'AGS Immo" />
                        {
                          modalType !== "" &&
                          <Modal type="apropos-aside">
                            <img src="/images/enseigne.jpg" alt="Enseigne Ags Immo" />
                          </Modal>
                        }
                        <div className="mainwrapper apropos-page">
                        {/* <div className="nos-services-banner">
                          <img src="/images/confiance-agsimmo.jpg" alt="Confiance Ags Immo" />
                          <div className="nsb-text">
                            <div className="container">   
                              <h2>AGS Immo: A Propos de Notre Agence</h2>
                              <p>Expérience - Confiance - Qualité - Sécurité</p>
                            </div>
                          </div>
                        </div> */}
                        <div className="container">   
                            <SEO title="A Propos de Notre Agence" />
                            <div className="enseigne">
                                <img src="/images/confiance-agsimmo-c.jpg" alt="Confiance Ags Immo" />
                            </div>
                          <div className="ap-wrapper">   
                            <div className="apropos-body">
                                <div className="ap-header">
                                    <h2>AGS Immo: A Propos de Notre Agence</h2>
                                    <p>Expérience - Confiance - Qualité - Sécurité</p>
                                </div>
                                <div className="ap-band" />
                                <div className="ap-text">
                                    <p>AGS Immo avec une expérience de plus de <strong> 20 ans </strong> dans l'immobilier au Sénégal et à l'Internationnal, est une agence immobilière basée à Dakar.</p>
                                    <p>Notre agence est constitue de professionnels de l'immobilier avec des compétences diverses. Ainsi nous intervenons avec efficacité dans tous les domaines de l'immobilier. </p>
                                    
                                    <p>Nous assistons os clients durant tout le processus de réalisation d'un projet immobilier:</p>
                                    <ul className="ap-nosservices" >
                                    {
                                      nosservices.map((n, i) => <li key={"services-ap" + i}> { n.nom } { nosservices.length !== ( i + 1) ? ";" : "..." } </li>)
                                    }
                                    </ul>
                                    <div className="enseigne2">
                                        <img src="/images/enseigne2.jpg" alt="Enseigne Ags Immo" />
                                    </div>
                                </div>
                                <HpLocalites />
                            </div>
                            <aside>
                              <div className="sticky-content">
                                <div className="ap-annonce">
                                  Terrains à vendre et coopérative d'habitat
                                  <button onClick={() => stateAttribute("modalType", "apropos-aside")}>
                                    Voir Offre
                                  </button>
                                </div>
                                <Slogan />
                              </div>
                            </aside>
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
  
export default AproposPage;
