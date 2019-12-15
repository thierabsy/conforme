// TOGGLE AN ELEMENT CLASS WITH THE PROVIDED ID, REMOVE THE CLASS FROM SUBLIME
export function toggleClass(id, className) {
    
    let classNamesList = document.getElementsByClassName(className);
    let selectedElement = document.getElementById(id);
    for(let cl in classNamesList){
      if(classNamesList[cl].id !== id){
        classNamesList[cl].classList && 
        classNamesList[cl].classList.remove("selected-element")
      }else{
        selectedElement.classList.toggle("selected-element");
      }
    }
}

export function toggler(type = ""){
    this.setState({
        [type]: !this.state[type]
    })
};

// ADD IN THE STATE AN ATTRIBUTE
export function stateAttribute(attr="", value=""){
    this.setState({
        [attr]: value
    })
};