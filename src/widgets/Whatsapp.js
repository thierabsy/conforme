import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { contacts, domain } from "../data"

const Whatsapp = ({img="", nom="", label=true}) => {
    let dot ="%3A";
    let space ="%20";
    // let equal ="%3D";
    let slash ="%2F";
    let url = `${domain}/${img}`;
    let tUrl= url.split(":").join(dot).split("/").join(slash);
    let text = `${tUrl} ${nom}`
    let message= text.trim().split(":").join(dot).split("/").join(slash).split(" ").join(space);
    return (
        <a className="whatsapp" href={`https://api.whatsapp.com/send?phone=${contacts.whatsapp}&text=${message}`} target="_blank"> 
            <FaWhatsapp /> <span>{ label && " Whatsapp" }</span> 
        </a>
)}

export default Whatsapp;
