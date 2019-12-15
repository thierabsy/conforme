import { createContext } from 'react';
  
export default createContext({
    state: {
        dark: false,
        showModal: false,
        showContact: false,
    },
    toggleDark: () => {},
    stateAttribute: () => {},
})