import React, { useContext } from "react";
import { references } from "../../data/references";

const HpReferences = () => {
    return ( 
        <div className="hp-references">
            <div className="container">
                <div className="hpr-header">
                    <span>Nos références</span>
                    <img src={`/logo.png`} alt="" />
                </div>
                    {/* <h3><span>Nos références:</span></h3> */}
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
    )
}

export default HpReferences;

