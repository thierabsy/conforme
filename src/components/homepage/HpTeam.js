import React, { useContext } from "react";
import Slide from 'react-reveal/Slide';
import { Link } from "gatsby";
import MainContext from "../../context-api/MainContext";

const HpTeam = () => {
    const context = useContext(MainContext);
    const { state: { team }} = context;
    return ( 
        <div className="hp-team">
            <div className="container">
                <div className="hp-team-inner">
                    <div className="hp-team-header">
                        <h3>notre équipe</h3>
                        <h2>Des Experts Confirmés</h2>
                        <p> Nous sommes une équipe d'experts avec une expérience nationale et internationale </p>
                    </div>
                    <div className="hp-team-grid">
                        {
                            team.map(t => <div key={"team-" + t.id} className="team-item">
                                <div className="ti-img-offset">
                                    <img src={`/icons/icon-128x128.png`} alt="Conforme Consulting" />
                                </div>
                                <div className="ti-img">
                                    <img src={`/images/team/${t.avatar_s}`} alt={ t.nom } />
                                </div>
                                <div className="ti-team-text">
                                    <h4>{ t.nom } </h4>
                                    <h5>{ t.fonction } </h5>
                                    <p>{ t.titre } </p>
                                </div>
                            </div>
                            )
                        }
                    </div>
                    <div className="btn-wrapper">
                        <button className="btn"> <Link to="/nos-experts">Plus de détails</Link> </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HpTeam;

