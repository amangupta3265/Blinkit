import React from "react";
import AdvantageCard from "./advantageCard";

function Advantages() {
  let advantages = [
    {
      img: "./images/fast dilevery.webp",
      heading: "Superfast Delivery",
      description:
        "Get your order delivered to your doorstep at the earliest from dark stores near you",
    },
    {
      img: "./images/deliver-icon-earnings.webp",
      heading: "Best Prices & Offers",
      description:
        "Get your order delivered to your doorstep at the earliest from dark stores near you",
    },
    {
      img: "./images/wide adorments.webp",
      heading: "Wide Assortment",
      description:
        "Get your order delivered to your doorstep at the earliest from dark stores near you",
    },
  ];

  let AdvantageCards = advantages.map((advantage, id) => {
    return <AdvantageCard key={id} advantage={advantage} />;
  });

  return <div className="advantages flexRow">{AdvantageCards}</div>;
}

export default Advantages;
