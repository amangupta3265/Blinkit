import React from "react";
import styles from "./advantages.module.css";
import advantagesData from "../../data/advantages.json";
import { getAdvantageCards } from "../../helpers/getAdvantageCards";

function Advantages() {
  const advantages = advantagesData["advantages"];

  const AdvantageCards = getAdvantageCards(advantages);

  return (
    <div className={`${styles.advantages} ${styles.flexRow}`}>
      {AdvantageCards}
    </div>
  );
}

export default Advantages;
