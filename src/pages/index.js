import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/hero";
import HpNosServices from "../components/homepage/HpNosServices";
import HpApropos from "../components/homepage/HpApropos";
import HpLocalites from "../components/homepage/HpLocalites";
import HpGalerie from "../components/homepage/HpGalerie";
import "../styles/homepage.scss";

const IndexPage = () => {
  return(
  <Layout active="accueil">
    <SEO title="Accueil" />
    <Hero />    
    <HpNosServices />
    <HpApropos />
    <HpLocalites />
    <HpGalerie />
  </Layout>
)}

export default IndexPage;