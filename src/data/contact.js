import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube} from "react-icons/fa"

export const contacts = {
    tel: "338202815",
    tel2: "778096121",
    tel3: "762876321",
    whatsapp: "778096121",
    email: "agsimmo@hotmail.fr",
    adress: "En face Mairie de Ngor",
    adress_suite: "Dakar-SENEGAL",
    socials: [
        {
            name: "facebook",
            icon: <FaFacebookF />,
            color: "#3b5998",
            link: "https://www.facebook.com",
        },
        {
            name: "twitter",
            icon: <FaTwitter />,
            color: "#1da1f2",
            link: "https://www.twitter.com",
        },
        {
            name: "whatsapp",
            icon: <FaWhatsapp />,
            color: "#25d366",
            link: "https://www.whatsapp.com",
        },
        {
            name: "instagram",
            icon: <FaInstagram />,
            color: "#c32aa3",
            link: "https://www.instagram.com",
        },
        {
            name: "youtube",
            icon: <FaYoutube />,
            color: "#ff0000",
            link: "https://www.youtube.com",
        },
    ]
}