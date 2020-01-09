import React from "react"
import { FaFacebookF, FaWhatsapp } from "react-icons/fa"
// import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube} from "react-icons/fa"

export const contacts = {
    tel: "338957261",
    tel2: "778096121",
    tel3: "762876321",
    whatsapp: "778096121",
    email: "agsimmo@hotmail.fr",
    adress: "Aïnoumady, Keur Massar",
    adress_suite: "Dakar-SENEGAL",
    socials: [
        {
            name: "facebook",
            icon: <FaFacebookF />,
            color: "#3b5998",
            link: "https://web.facebook.com/AGS-IMMO-112062300320646/",
        },
        // {
        //     name: "twitter",
        //     icon: <FaTwitter />,
        //     color: "#1da1f2",
        //     link: "https://www.twitter.com",
        // },
        {
            name: "whatsapp",
            icon: <FaWhatsapp />,
            color: "#25d366",
            link: "https://www.whatsapp.com",
        },
        // {
        //     name: "instagram",
        //     icon: <FaInstagram />,
        //     color: "#c32aa3",
        //     link: "https://www.instagram.com",
        // },
        // {
        //     name: "youtube",
        //     icon: <FaYoutube />,
        //     color: "#ff0000",
        //     link: "https://www.youtube.com",
        // },
    ]
}