import React, { useContext } from "react"
import { FaEnvelopeOpen, FaFilePdf } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/emploi.scss"
import MainContext from "../context-api/MainContext";
// import Slogan from "../components/Slogan";
import Modal from "../components/Modal";
// import HpTeam from "../components/homepage/HpTeam";
import PageHeader from "../components/PageHeader";
import { Link } from "gatsby";

const MVV = () => {
  return(
    <div className="ap-mvv-wrapper">
        <div className="mvv mvv-vision">
          <div className="mvv-inner">
            <div className="mvv-title">Vision</div>
            <div className="mvv-separator" />
            <div className="mvv-content">
              Contribuer à rendre les institutions et organisations publiques & privées plus performantes et adaptées aux exigences de l’économie émergente.
            </div>
          </div>
        </div>
        <div className="mvv mvv-mission">
          <div className="mvv-inner">
          <div className="mvv-title">Mission</div>
            <div className="mvv-separator" />
            <div className="mvv-content">
              Appui aux institutions et organisations publiques et privées dans la planification,
              la conception et la mise en œuvre de leurs politiques et stratégie de développement durable.
            </div>
          </div>
        </div>
        <div className="mvv mvv-valeurs">
          <div className="mvv-inner">
            <div className="mvv-title">Valeurs</div>
            <div className="mvv-separator" />
            <div className="mvv-content">
              <ul>
                <li><img src="/icons/icon-64x64.png" alt="" /> Conformité </li>
                <li><img src="/icons/icon-64x64.png" alt="" />  Ethique </li>
                <li><img src="/icons/icon-64x64.png" alt="" />  Intégrité </li>
                <li><img src="/icons/icon-64x64.png" alt="" />  Professionnalisme </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

const Presentation = () => {
  const context = useContext(MainContext);
  const { state: { modalType }, stateAttribute } = context;
  return(
      <Layout active="presentation">
          <SEO title="Présentation" />
          {
            modalType !== "" &&
            <Modal type="apropos-aside">
              <img src="/images/enseigne.jpg" alt="Enseigne Ags Immo" />
            </Modal>
          }
          <div className="mainwrapper presentation-page">
            <PageHeader img="/images/footer_bg.jpg" page="Présentation" >
              <h1>A Propos du Cabinet</h1>
            </PageHeader>
          <div className="container">   
              <SEO title="Présentation" />
            <div className="ap-wrapper">   
              <div className="apropos-body apb apb-left">
                <div className="ap-header">
                  <h2>CONFORME Consulting</h2>
                  <p>Conseil - Formation - Management - Etudes</p>
                  <div className="exp-separator" />
                </div>
                <div className="ap-text">
                  <p>
                    Le Cabinet CONFORME - Consulting « Conseil – Formation -Management – Etudes », est un cabinet de consultance internationale, spécialisé dans 
                    les domaines du – Conseil stratégique & Développement Organisationnel, - Gestion de Projets & Programmes de Développement – et  Gestion des Risques 
                    & Portefeuilles-. Il met son expérience au service des gouvernements, administrations, projets, entreprises publiques et privées dans plusieurs pays 
                    de l’Afrique de l’Ouest et du Centre en particulier, ainsi que des organisations régionales et internationales spécialisées telles que la Banque mondiale, la Banque Africaine de Développement, l’Union Européenne, les Nations Unies etc. 
                  </p>
                  <p>
                    Le Cabinet CONFORME Consulting, est constitué d’un groupe d’Experts Séniors associés bilingues et de spécialistes internationaux ayant de solides expériences 
                    dans le domaine du développement international. L’intervention de notre cabinet auprès de nos clients et partenaires, consiste à leur pourvoir une assistance 
                    technique, notamment  dans les domaines du conseil stratégique, de la formation sur mesure,  le management et des études, en vue du renforcement durable de leurs des capacités. 
                  </p>
                </div>
                <div className="ap-mvv">
                  <MVV />
                </div>
              </div>
              <aside className="aside apb apb-right">
                <div className="sticky-content">
                  <div className="ap-annonce">
                    <FaEnvelopeOpen />
                    Besoin de plus d'informations sur notre activité, nos formations, nos séminaires professionnelles.
                    <Link to="/contact">Nous Contacter</Link>
                  </div>
                  <div className="ap-presentation">
                    <FaFilePdf /> Notre Cabinet
                  </div>
                </div>
              </aside>
            </div>
            {/* <div className="ap-team">
              <HpTeam />
            </div> */}
          </div>
      </div>
    </Layout>
  )
}
  
export default Presentation;
