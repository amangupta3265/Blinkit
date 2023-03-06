import React from "react";
import Copyright from "./copyright";
import DownloadApp from "./downloadApp";

function Footer() {
  return (
    <>
      <hr className="footerContainer" />
      <div className="footer">
        <Copyright />
        <DownloadApp />
        <Copyright />
      </div>
    </>
  );
}

export default Footer;
