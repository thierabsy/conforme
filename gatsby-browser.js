import React from "react"
import "./src/styles/main.css"

import MainProvider from "./src/context-api/MainProvider"

export const wrapRootElement = ({ element }) => (
  <MainProvider>{element}</MainProvider>
)
