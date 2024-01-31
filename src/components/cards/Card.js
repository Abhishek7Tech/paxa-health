import CardHead from "../../utils/components/CardHead";
import CardsWithHeading from "./HeadingCards";
import DesignCardData from "../../utils/carddata/DesignCardData";
const Card = () => {
  return (
    <div>
      <CardHead />
      <CardsWithHeading data={DesignCardData[0]} />
    </div>
  );
};

export default Card;
