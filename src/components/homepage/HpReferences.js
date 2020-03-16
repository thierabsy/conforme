import React, { useContext } from "react";
import MainContext from "../../context-api/MainContext";

const HpReferences = () => {
    const context = useContext(MainContext);
    const { state: { references }} = context;
    return ( 
        <div className="hp-references">
            <div className="container">
                <div className="hp-ref-inner">
                    <div className="hpr hp-ref-left">
                        <img src={`/images/references.jpg`} alt="Conforme, références" />
                    </div>
                    <div className="hpr hp-ref-right">
                        <div className="hpr-inner">
                            <div className="hpr-header">
                                <h2>Une expertise, au service  </h2>
                                <div className="hp-separator" />
                                <p><strong>Conforme Consulting</strong>, composé d'une équipe pluridisciplinaire et 
                                des experts associés de haut niveau aide les organismes publiques et privés à mettre en place des processus efficaces et efficients. </p>
                            </div>
                            <h3><span>Nos références:</span></h3>
                            <div className="hp-ref-grid">
                                {
                                    references.map(t => <div key={"references-" + t.id} className="ref-item">
                                        <div className="ti-img">
                                            <img src={`/images/references/${t.logo}`} alt={ t.nom } />
                                        </div>
                                        <p>{ t.nom } </p>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HpReferences;

