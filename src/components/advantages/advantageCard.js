import React from "react";

function AdvantageCard(props) {
  //console.log(props.heading);
  return (
    <div className="adanvatge__card">
      <img src="./images/fast dilevery.webp" alt="" />
      <p className="paddingTopBottom10px adanvatgeCard__heading">
        {props.advantage.heading}
      </p>
      <p className="adanvatgeCard__description">
        {props.advantage.description}
      </p>
    </div>
  );
}

export default AdvantageCard;
