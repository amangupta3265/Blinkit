import React from "react";
import { getSocialHandles } from "./helpers/getSocialHandles";
import styles from "./socialHandles.modules.css";

function SocialHandles() {
  const SocialHandleComponents = getSocialHandles();

  return <div id="footer__socialHandles">{SocialHandleComponents}</div>;
}

export default SocialHandles;
