import React from "react";
import Slide from 'react-reveal/Slide';
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
                <p>
                    Conforme Consulting est un cabinet de conseils, de formation, 
                    de management et d'études qui aide les organismes à mieux élaborer leur stratégie.
                </p>
                <p> Notre équipe d'experts natiaux et internationaux vous aide à mettre en place... </p>
                <button className="btn"> <Link to="/presentation">En savoir plus</Link> </button>
                <span className="sb span-after">Conseils stratégiques</span>
            </div>
        </div>
        </div>
        </div>
    )
}

export default HpApropos;

