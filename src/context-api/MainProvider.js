import React from "react"
import MainContext from "./MainContext"
import { toggleClass, toggler, stateAttribute } from "./functions/layout_func"
import { toXOF } from "./functions/utils"


// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true
 
const isMobile = window.innerWidth < 512 ? true : false;

class MainProvider extends React.Component {
  state = {
    dark: false,
    currentProduct: {},
    currentImg: 0,
    tab: 1,
    showMore: false,
    showContact: false,
    showModal: false,
    showSlogan: false,
    showTopbar: isMobile || false,
    isMobile: isMobile,
    modalType: "",
    modalGalerieImages: [], 
    activeGalerieImage: "",
    cursorPos: {
      X: 0,
      Y: 0
    }
  }

  toggleDark = () => {
    let dark = !this.state.dark
    localStorage.setItem("dark", JSON.stringify(dark))
    this.setState({ dark })
  }
  inc = () => {
    this.setState({ age: this.state.age + 1 })
  }
  stateAttribute = (type) => {
    this.setState({ modalType: type })
  }
  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark"))
    if (lsDark) {
      this.setState({ dark: lsDark })
    } else if (supportsDarkMode()) {
      this.setState({ dark: true })
    }
  }

  render() {
    const { children } = this.props
    // const { dark } = this.state

    const contextValue = {
      state: this.state,
      toggleDark: this.toggleDark,
      stateAttribute: this.stateAttribute,
      toggler: toggler.bind(this),
      toggleClass: toggleClass.bind(this),
      stateAttribute: stateAttribute.bind(this),
      toXOF: toXOF.bind(this),
    }
    return (
      <MainContext.Provider
        value={ contextValue }
      >
        {children}
      </MainContext.Provider>
    )
  }
}

export default MainProvider