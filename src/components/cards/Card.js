import CardHead from "../../utils/components/CardHead";
import CardsWithHeading from "../../utils/components/HeadingCards";
import DesignCardData from "../../utils/carddata/DesignCardData";
import CardsWithSubheading from "../../utils/components/SubHeadingCards";
const Card = () => {
  return (
    <div>
      <CardHead />
      <CardsWithHeading data={DesignCardData[0]} />
      <CardsWithSubheading data={DesignCardData[1]}/>
    </div>
  );
};

export default Card;
