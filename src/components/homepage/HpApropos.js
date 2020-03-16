import React from "react"
import { Link } from "gatsby";

const HpApropos = () => {
    return ( 
        <div className="hp-apropos-conforme">
        <div className="container">
        <div className="hp-apropos-inner">
            <div className="hpa hpa-left">
                <span className="sb span-before" />
                <img src="/images/comite_startegique.jpg" alt="Conforme Consulting" />
            </div>
            <div className="hpa hpa-right">
                <h2>Conforme</h2>
                <h3>Consulting</h3>
                <p>Le Cabinet CONFORME - Consulting « Conseil – Formation -Management – Etudes », est un cabinet 
                    de consultance internationale, spécialisé dans les domaines du – Conseil stratégique & Développement 
                    Organisationnel, - Gestion de Projets & Programmes de Développement – et Gestion des Risques & Portefeuilles... </p>
                <button className="btn"> <Link to="/presentation">En savoir plus</Link> </button>
                <span className="sb span-after">Conseils stratégiques</span>
            </div>
        </div>
        </div>
        </div>
    )
}

export default HpApropos;

