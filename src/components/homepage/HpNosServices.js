import React, { useEffect, useState} from "react"
import Slide from 'react-reveal/Slide';
import { nosservices } from "../../data/nosservices";

const HpNosServices = () => {
    const [isMobile, setMobile] = useState(false);
    const [nbItems, setItems] = useState(3);
    useEffect(() => {
        const status = window.innerWidth < 728;
        setMobile(status);
        setItems(status ? 3 : nosservices.length);
    }, [isMobile]);

    return ( 
        <div className="hp-apropos">
            <div className="container">
                <Slide bottom>
                    <h3 className="hpa-title"><span>Que pouvons nous faire pour vous?</span></h3>
                </Slide> 
                <div className="hpb-items">
                    {
                        nosservices.slice(0, nbItems).map(item => <div key={"service-" + item.id} className="hp-service">
                            <Slide bottom>
                                <div className="hps-wrapper">
                                    <img src={`/images/icons/${ item.icon }`} alt={ item.nom } />
                                    <div className="hps-inner">
                                        <h3> <span> { item.nom } </span> </h3>
                                        <p> { item.excerpt } </p>
                                    </div>
                                </div>
                            </Slide>
                        </div>)
                    }
                </div>
                {
                    nbItems <= nosservices.length && isMobile &&
                    <div className="btn-action">
                        <Slide bottom>
                            <button onClick={() => setItems(nbItems + 3)}>Voir plus</button>
                        </Slide>
                    </div>
                }
            </div>
        </div>
    )
}

export default HpNosServices;

