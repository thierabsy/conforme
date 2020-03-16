import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/hero";
import HpNosServices from "../components/homepage/HpNosServices";
import HpApropos from "../components/homepage/HpApropos";
import HpBand from "../components/homepage/HpBand";
import HpTeam from "../components/homepage/HpTeam";
import HpReferences from "../components/homepage/HpReferences";
import "../styles/homepage.scss";

const IndexPage = () => {
  return(
  <Layout active="accueil">
    <SEO title="Accueil" />
    <Hero />    
    <HpNosServices />
    <HpApropos />
    <HpBand />
    <HpTeam />
    <HpReferences />
  </Layout>
)}

export default IndexPage;