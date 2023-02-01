import React from "react";
import SocialHandles from "./atoms/socialHandles";
import Copyright from "./atoms/copyright";
import DownloadApp from "./atoms/downloadApp";
import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <hr className={styles.footerContainer} />
      <div className={styles.footer}>
        <Copyright />
        <DownloadApp />
        <SocialHandles />
      </div>
    </>
  );
}

export default Footer;
