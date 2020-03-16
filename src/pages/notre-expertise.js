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
import { expertises } from "../data/expertise";

const Expertise = () => {
  const context = useContext(MainContext);
  const { state: { modalType } } = context;
  return(
      <Layout active="notre-expertise">
          <SEO title="Notre Expertise" />
          {
            modalType !== "" &&
            <Modal type="apropos-aside">
              <img src="/images/enseigne.jpg" alt="Enseigne Ags Immo" />
            </Modal>
          }
          <div className="mainwrapper expertise-page">
            <PageHeader img="/images/footer_bg.jpg" page="Notre Expertise" >
              <h1>Notre Expertise</h1>
            </PageHeader>
          <div className="container">   
            <SEO title="Notre Expertise" />
            <div className="ap-wrapper">   
              <div className="apropos-body apb apb-left">
                <div className="ap-expertises">
                  {
                    expertises.map((item, i) => <div  key={"expertise-item--" + i} className="exp-item">
                    <div className="exp exp-img">
                      <img src={`/images/expertises/${item.image}`} alt="" /> 
                    </div>
                    <div className="exp exp-text">
                      <div className="exp-title">{ item.title }</div>
                      <div className="exp-separator" />
                      <div className="exp-content">
                        <ul>
                           {
                             item.items.map((exp, idx) => <li key={"expertise--" + idx}>
                              <img src="/icons/icon-64x64.png" alt="" /> { exp } </li>
                          )}
                        </ul>
                      </div>
                    </div>
                    </div>
                  )}
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
  
export default Expertise;
