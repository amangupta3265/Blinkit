import AdvantageCard from "../molecules/advantages/atoms/advantageCard";
import lodash from "lodash";

function getAdvantageCard(advantage, id) {
  return <AdvantageCard key={advantage.id} advantage={advantage} />;
}

function getAdvantageCards(advantages) {
  const AdvantageCards = lodash.map(advantages, getAdvantageCard);

  return AdvantageCards;
}

export { getAdvantageCards };
