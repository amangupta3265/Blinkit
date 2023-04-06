import React from "react";
import styles from "./advantageCard.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";

function AdvantageCard(props) {
  return (
    <div className={styles.adanvatge__card}>
      <img src="./images/fast dilevery.webp" alt="" />
      <p
        className={classNames(
          styles.paddingTopBottom10px,
          styles.adanvatgeCard__heading
        )}
      >
        {props.advantage.heading}
      </p>
      <p className={styles.adanvatgeCard__description}>
        {props.advantage.description}
      </p>
    </div>
  );
}

AdvantageCard.defaultTypes = {
  advantage: {},
};

AdvantageCard.propTypes = {
  advantage: PropTypes.object,
};

export default AdvantageCard;
