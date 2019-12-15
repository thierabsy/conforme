import React from "react"
import { Link } from "gatsby"
import { FaHandPointRight } from "react-icons/fa"
import MainContext from "../../context-api/MainContext";

const Partenaire = () => (
    <MainContext.Consumer>
        {
            val => {
                const { stateAttribute } = val;
                return(
                    <div className="partenaire">
                        <div className="ptInner">
                        <img src="logo.png" alt="Logo" />
                        <h3><span>Devenir Partenaire</span></h3>
                        <p>Etre partenaire de Tiens Team Success contient beaucoup de bénéfices.</p>
                        <ul>
                            <li><FaHandPointRight /> Bénéficiez des prix réduits des produits</li>
                            <li><FaHandPointRight /> Bénéficiez d'un coaching particulier gratuit</li>
                            <li><FaHandPointRight /> Développez votre propre réseau</li>
                        </ul>
                        <div className="pt-buttons">
                                <Link to="/emploi"><button onClick={() => stateAttribute("tab", 2)} className="pt-btn1">Voir conditions</button></Link>
                                <Link to="/emploi"><button className="pt-btn2">Télécharger</button></Link>
                                <Link to="/contact"><button className="pt-btn3">Contact</button></Link>
                        </div>
                        <img className="pt-img" src="images/bottom.png" alt="Logo" />
                        </div>
                    </div>
                )
            }
        }
    </MainContext.Consumer>
)

export default Partenaire;

