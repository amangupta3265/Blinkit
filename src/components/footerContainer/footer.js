import React from "react";
import SocialHandles from "./socialHandles";
import Copyright from "./copyright";
import DownloadApp from "./downloadApp";

function Footer() {
  return (
    <>
      <hr className="footerContainer" />
      <div className="footer">
        <Copyright />
        <DownloadApp />
        <SocialHandles />
      </div>
    </>
  );
}

export default Footer;
