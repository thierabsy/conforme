import React from "react"
import Slide from 'react-reveal/Slide';
import { localites } from "../../data/localites";
import MySlider from "../widgets/MySlider";
import Slogan from "../Slogan";

const HpBienfaits = () => {

    return ( 
        <div className="hp-bienfaits">
            
            <div className="container">
                <Slide bottom>
                    <Slogan />
                </Slide>
                <div className="hpb-items">
                    <h3><span>Nous intervenons dans les localités suivantes:</span></h3>
                    <div className="hpbi hpbi-vitamines">
                        <MySlider
                            numbSlides={ localites.length }
                            slideWidth={ 151 }
                            sliderId="HpBienfaits"
                        >
                            {
                                localites.map((v, i) => <div key={"vitames-slider-" + i} className="slide-v">
                                        <div className="slide-inner">
                                            <h4> { v.localite } </h4>
                                        </div>
                                    </div>
                                )
                            }
                        </MySlider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HpBienfaits;

