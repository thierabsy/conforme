import React, { useContext } from "react"
// import { FaWindowClose } from "react-icons/fa"
import MainContext from "../context-api/MainContext";

const ModalGalerie = ({ title, type, children, action=() => {} }) => {
  const context = useContext(MainContext);
  const { state: { modalType, modalGalerieImages, activeGalerieImage }, stateAttribute } = context;
  const images = modalGalerieImages || [];
  const activeImg = activeGalerieImage || "";
  return(
    <div className="">
      <div className={`slogan-modal ${ modalType === type ? "showModal" : ""}`} >
        <div className="galerie-wrapper">
          <div className="close-modal" onClick={() => [stateAttribute("modalType", ""), action()]} />
          <div className="galerie-active-img">
            <img src={`/images/galerie/${activeImg}`} alt="Galerie Element" />
          </div>
          <div className="galerie-thumbs">
            <ul>
            {
              images.map((img, idx) => <li key={'gal-mod-thumb-' + idx} onClick={() => stateAttribute("activeGalerieImage", img)}>
                    <img src={`/images/galerie/${img}`} alt="Galerie Thumb" />
                  </li>)
            }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

}
export default ModalGalerie;
