import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <noscript key="gtm-noscript">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PT5T3B8Q"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>,
  ]);
};
