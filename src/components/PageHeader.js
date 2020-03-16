import React from "react"
import { Link } from "gatsby";
import { FaChevronRight } from "react-icons/fa";


const PageHeader = ({img="", page="", children}) => {

  return(
    <div className="page-header">
      <img src={img} alt="" />
        <div className="container">
          <div className="ph-text">
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li> <FaChevronRight /> </li>
              <li> { page } </li>
            </ul>
            { children }
        </div>
      </div>
    </div>
  )

}
export default PageHeader;
