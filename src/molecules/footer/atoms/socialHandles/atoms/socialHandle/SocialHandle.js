import React from "react";
import classNames from "classnames";
import styles from "./socialHandle.module.css";

function SocialHandle(props) {
  return (
    <i
      className={classNames(
        "fa-brands",
        props.iconStyle,
        styles.footer__socialHandles_icon
      )}
    ></i>
  );
}

export default SocialHandle;
