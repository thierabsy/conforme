import { Link } from "gatsby"
import React, { useContext} from "react"
import MainContext from "../context-api/MainContext";

// import { contacts } from "../data/contact" 
// import Social from "../widgets/socials";

const Footer = () => {
    const context = useContext(MainContext);
    const { toggler } = context;
    return (
        <footer>
            {/* <div className="footer-text">
                <div className="container">
                    <div className="ft-part-1">
                        <h4><span>Tiens Team Success</span></h4>
                        <p>Team Success offre des produits et services du Group Tiens au Sénégal.</p>
                    </div>
                    <div className="ft-part-2">
                        <h4><span>Contact</span></h4>
                        <ul>
                            <li><span> Addresse:</span> { contacts.adress } </li>
                            <li><span> Tel:</span> <a href={`tel:${ contacts.tel.replace(" ", "") }`}> { contacts.tel }</a> </li>
                            <li><span> Email:</span> <a color="white" href={`mailto:${ contacts.email }`}>{ contacts.email }</a> </li>
                        </ul>
                        <div className="voir-carte">
                            <a href="https://www.google.com/maps/place/Rue+YF+545,+Dakar/@14.7550725,-17.471817,18z/data=!3m1!4b1!4m8!1m2!2m1!1sgoogle+map+static+api!3m4!1s0xec10d6687967619:0x1d6b0f27a7d7df3f!8m2!3d14.7550722!4d-17.4707217" target="_blank">Voir carte</a>
                        </div>
                        <Social />
                    </div>
                </div>
                <img src="/images/bottom.png" alt=" Tiens Band" />
            </div> */}
            <div className="ft-navigation">
              <ul>
                <li> <Link color="white" to="/">Accueil </Link></li>
                <li> <Link color="white" to="/apropos-ags-immo">A Propos </Link></li>
                <li> <Link to="/nos-services"> Nos Services </Link></li>
                {/* <li> <Link to="/recettes"> Recettes </Link></li> */}
                <li onClick={() => toggler("showContact")} > <Link to="#"> Contact </Link></li>
                {/* <li className="emploi"> <Link to="/emploi"> Emploi </Link></li> */}
              </ul>
            </div>
            <div className="ft-copy">
                © {new Date().getFullYear()} AGS Immo
            </div>
        </footer>
    )
}

export default Footer
