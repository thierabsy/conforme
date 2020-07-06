import React, { useContext, useState } from "react"
import { FaEnvelopeOpen, FaFilePdf } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/emploi.scss"
import MainContext from "../context-api/MainContext";
import Modal from "../components/Modal";
import PageHeader from "../components/PageHeader";
import { Link } from "gatsby";
import { team } from "../data/team";

const Experts = () => {
  const [tab, setTab] = useState(null)
  const context = useContext(MainContext);
  const { state: { modalType } } = context;
  const experts = team.filter(t => t.type === "expert");
  const associes = team.filter(t => t.type === "associe");
  return(
      <Layout active="nos-experts">
          <SEO title="Nos Experts" />
          <div className="mainwrapper experts-page">
            {/* <PageHeader img="/images/footer_bg.jpg" page="Notre Expertise" >
              <h1>Nos Experts</h1>
            </PageHeader> */}
          <div className="container">   
            <div className="ap-wrapper">   
              <div className="apropos-body apb apb-left">
              {/* <div className="ap-header-img">
                <img src={`/images/global.jpg`} alt="" /> 
              </div> */}
              <div className="ap-header-intro">
                <h2>Equipe de Direction</h2>
              </div>
                <div className="ap-expertises">
                  {
                    experts.map((item, i) => {
                      const selected = item.id === tab;
                      return(
                        <div  key={"expertise-item--" + i} className={`exp-item ${selected ? "showMore" : ""}`}>
                        <div className="exp exp-img">
                          <img src={`/images/team/${item.avatar_s}`} alt="" /> 
                          <img className="filigrane" src={`/logo.png`} alt="" /> 
                          <h2>{ item.nom }</h2>
                        </div>
                        <div className="exp exp-text">
                          <h2>{ item.fonction }</h2>
                          <h3>{ item.titre }</h3>
                          <div className="exp-separator" />
                          <div className="exp-content">
                            <ul>
                              {
                                item.description.slice(0, selected ? 100 : 1).map((exp, idx) => <li key={"expertise--" + idx}>
                                  { exp } { !selected && <sapn className="showMore-btn" onClick={() => setTab(item.id)}>Lire plus...</sapn>}
                                </li>)}
                            </ul>
                          </div>
                        </div>
                        </div>
                      )
                    })}
                </div>
                <div className="ap-header-intro">
                  <h2>Experts Associés</h2>
                </div>
                <div className="ap-expertises">
                  {
                    associes.map((item, i) => {
                      const selected = item.id === tab;
                      return(
                        <div  key={"expertise-item--" + i} className={`exp-item ${selected ? "showMore" : ""}`}>
                        <div className="exp exp-img">
                          <img src={`/images/team/${item.avatar_s}`} alt="" /> 
                          <img className="filigrane" src={`/logo.png`} alt="" /> 
                          <h2>{ item.nom }</h2>
                        </div>
                        <div className="exp exp-text">
                          <h2>{ item.fonction }</h2>
                          <h3>{ item.titre }</h3>
                          <div className="exp-separator" />
                          <div className="exp-content">
                            <ul>
                              {
                                item.description.slice(0, selected ? 100 : 1).map((exp, idx) => <li key={"expertise--" + idx}>
                                  { exp } { !selected && <sapn className="showMore-btn" onClick={() => setTab(item.id)}>Lire plus...</sapn>}
                                </li>)}
                            </ul>
                          </div>
                        </div>
                        </div>
                      )
                    })}
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
          </div>
      </div>
    </Layout>
  )
}
  
export default Experts;
