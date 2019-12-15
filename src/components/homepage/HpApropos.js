import React from "react";
import Slide from 'react-reveal/Slide';
import { Link } from "gatsby";

const HpApropos = () => {
    return ( 
        <div className="hp-apropos-2col">
            <div className="hpa hpa-left">
                <img src="/images/immo.jpg" alt="AGS Immo" />
            </div>
            <div className="hpa hpa-right">
                <div className="hpa-inner">
                    <Slide bottom>
                        <h3><span>A propos d'AGS Immo</span></h3>
                    </Slide>
                    <Slide bottom>
                        <p>
                            Notre agence <strong>AGS Immo</strong> avec une expérience de plus de 20 ans dans le <strong>marché immoblier sénégalais</strong> 
                            vous aide et facilite dans vos achats, ventes, gestion et réalisation de vos projets immobiliers.
                        </p>
                    </Slide>
                    <Slide bottom>
                        <Link to="apropos">
                            <button>En savoir plus ...</button>
                        </Link>
                    </Slide>
                </div>
            </div>
        </div>
    )
}

export default HpApropos;

