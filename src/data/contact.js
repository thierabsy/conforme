import React from "react"
import { FaFacebookF, FaWhatsapp } from "react-icons/fa"
// import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube} from "react-icons/fa"

export const contacts = {
    tel: "00221338642964",
    tel_label: "(+221) 33 864 29 64",
    tel2: "00221774035693",
    tel2_label: "(+221) 77 403 56 93",
    tel3: "771111111",
    whatsapp: "771111111",
    email: "info@conforme.sn",
    adress: "Villa N°02 Ouest Foire, Dakar",
    adress_suite: "Dakar-SENEGAL",
    bp: "64684 Dakar Fann, Senegal",
    socials: [
        {
            name: "facebook",
            icon: <FaFacebookF />,
            color: "#3b5998",
            link: "https://web.facebook.com",
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