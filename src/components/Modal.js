import React, { useContext } from "react"
// import { FaWindowClose } from "react-icons/fa"
import MainContext from "../context-api/MainContext";


const Modal = ({ title, type, children }) => {
  const context = useContext(MainContext);
  const { state: { modalType }, stateAttribute } = context;

  return(
    <div className="">
      <div className={`slogan-modal ${ modalType !== "" ? "showModal" : ""}`} 
          onClick={() => stateAttribute("modalType", "")}>
        { children }
      </div>
      {/* <div className="slogan" onClick={() => stateAttribute("modalType", type)}>
        <div className="slogan-agrandir">
          <span>{ title}</span>
        </div>
      </div> */}
    </div>
  )

}
export default Modal;
