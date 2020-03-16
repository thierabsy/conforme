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
            {/* <div className="container">
                <h1>Cabinet CONFORME Consulting</h1>
                <h2>Nos services</h2>
                <ul>
                    <li>Conseil</li>
                    <li>Formation</li>
                    <li>Management</li>
                    <li>Etudes</li>
                </ul>
            </div> */}
        </div>
    )
}

export default HpNosServices;

