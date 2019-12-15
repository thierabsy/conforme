import React from "react";
export function onRenderBody(
  { setHeadComponents }) {
  setHeadComponents([
      // <script 
      //     type="text/javascript" 
      //     id="hs-script-loader" 
      //     async 
      //     defer 
      //     src="//js.hs-scripts.com/6743435.js" 
      // />,
      <script 
          key="lazyload"
          src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.4.0/dist/lazyload.min.js" 
      />
  ]);
}

 