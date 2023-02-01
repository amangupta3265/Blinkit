import React from "react";
import styles from "./downloadApp.module.css";
import classNames from "classnames";

function DownloadApp() {
  return (
    <div className={styles.footer__downloadApp}>
      <div className={styles.downloadAppTitle}>Download App</div>

      <img
        className={classNames(styles["downloadApp__img"], styles.appStore)}
        src="./images/appstore.webp"
        alt=""
      />

      <img
        className={classNames(styles["downloadApp__img"], styles.playStore)}
        src="./images/playstore.webp"
        alt=""
      />
    </div>
  );
}

export default DownloadApp;
