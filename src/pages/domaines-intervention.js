import React from "react"
import { FaEnvelopeOpen, FaFilePdf } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader";
import { Link } from "gatsby";
import { domaines } from "../data/domaines";

const Domaines = () => {
  return(
      <Layout active="domaines-intervention">
          <SEO title="Domaines d'intervention" />
          <div className="mainwrapper domaines-page">
            {/* <PageHeader img="/images/footer_bg.jpg" page="Domaines" >
              <h1>Domaines d'intervention</h1>
            </PageHeader> */}
          <div className="container">   
            <div className="ap-wrapper">   
              <div className="apropos-body apb apb-left">
                <div className="dom-header">
                  L'équipe du Cabinet Conforme Consulting, disposant des expériences diverses de plus de <strong>20 ans </strong> dans les milieux académiques et professionnels, intervient sur différents domaines parmis lesquels:
                </div>
                <div className="exp-content">
                  <ul>
                      {
                        domaines.map((exp, idx) => <li key={"expertise--" + idx}>
                        <img src="/icons/icon-64x64.png" alt="" /> { exp.title } </li>
                    )}
                  </ul>
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
  
export default Domaines;

