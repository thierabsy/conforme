import React, { useContext } from "react"
// import { FaWindowClose } from "react-icons/fa"
import MainContext from "../context-api/MainContext";

const Modal = ({ title, type, children, action=() => {} }) => {
  const context = useContext(MainContext);
  const { state: { modalType }, stateAttribute } = context;
  
  return(
    <div className="">
      <div className={`slogan-modal ${ modalType === type ? "showModal" : ""}`} 
          onClick={() => [stateAttribute("modalType", ""), action()]}>
        { children }
      </div>
    </div>
  )

}
export default Modal;
