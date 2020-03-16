import React from "react";
import Slide from 'react-reveal/Slide';
import { Link } from "gatsby";

const HpBand = () => {
    return ( 
        <div className="HpBand">
        <div className="container">
           <span> Besoin de plus d'informations </span> <button className="btn"> <Link to="/presentation">Nous contacter</Link> </button>
        </div>
        </div>
    )
}

export default HpBand;

