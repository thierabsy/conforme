import React from "react"

import { contacts } from "../data/contact"

const Social = () => (
  <ul className="socials">
    {
        contacts
            .socials.map( soc => 
                <li key={ soc.name } 
                    style={{ background: soc.color }}
                    className="socialLi"
                >
                    <a href={ soc.link } 
                        target="_blank"
                        className="soc-link"
                    >
                        { soc.icon }
                    </a>
                </li>
        )
    }
  </ul>
)


export default Social
