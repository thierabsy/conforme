import React, { useContext } from "react"
// import { FaWindowClose } from "react-icons/fa"
import MainContext from "../context-api/MainContext";


const Slogan = () => {
  const context = useContext(MainContext);
  const { state: { showSlogan }, toggler } = context;

  return(
    <div className="">
      <div className={`slogan-modal ${ showSlogan ? "showModal" : ""}`} 
          onClick={() => toggler("showSlogan")}>
        {/* <span className="slogan-close">
          <FaWindowClose />
        </span> */}
        <img src="/images/enseigne2.jpg" alt="Slogan" />
      </div>
      <div className="slogan" onClick={() => toggler("showSlogan")}>
        <img src="/images/enseigne2.jpg" alt="Slogan" />
        <div className="slogan-agrandir">
          <span>Agrandir</span>
        </div>
      </div>
    </div>
  )

}
export default Slogan;
