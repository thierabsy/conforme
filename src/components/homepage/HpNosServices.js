import React, { useEffect, useState, useContext, useRef} from "react"
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import { nosservices } from "../../data/nosservices";
import Modal from "../Modal";
import MainContext from "../../context-api/MainContext";

const HpNosServices = () => {
    const [isMobile, setMobile] = useState(false);
    const [nbItems, setItems] = useState(3);
    const iframeId = useRef(null);
    useEffect(() => {
        const status = window.innerWidth < 728;
        setMobile(status);
        setItems(status ? 3 : nosservices.length);
    }, [isMobile]);
    const context = useContext(MainContext);
    const { stateAttribute } = context;
    const stopVideo = () => {
        let frame = document.getElementsByClassName("youtube-video");
        frame[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
    return ( 
        <div className="hp-apropos">
            <Modal action= { stopVideo } type="hp-video">
                <div className="hp-video">
                    <iframe 
                        className="youtube-video"
                        width={isMobile ? "100%" : "728"}
                        height={isMobile ? "100%" : "465"}
                        src="https://www.youtube.com/embed/PGmqkOZR7kI?enablejsapi=1" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>
            <div className="container">
                <div className="hpa-img">
                    <Flip >
                        <div className="hpa-img-wrapper" onClick={() => stateAttribute("modalType", "hp-video")}>
                            <img src="/images/youtube.png" alt="Ags Immo Vidéo" />
                        </div>
                    </Flip> 
                </div>
                <Slide bottom>
                    <h3 className="hpa-title"><span>Que pouvons nous faire pour vous?</span></h3>
                    <p className="hpa-title-text">Votre agence de confiance <strong>AGS Immo</strong> vous accompagne dans tous vos projets immobiliers au Sénégal allant de l'achat de maison, de villa, d'immeuble, de terrain, avec tous les documents et démarches administratifs. </p>
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

