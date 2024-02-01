import CardHead from "../../utils/components/CardHead";
import CardsWithHeading from "../../utils/components/HeadingCards";
import DesignCardData from "../../utils/carddata/DesignCardData";
import CardsWithSubheading from "../../utils/components/SubHeadingCards";
import CardsWithImages from "../../utils/components/ImageCards";
import NewCard from "../../utils/components/NewCard";
const Card = () => {
  return (
    <main>
      <div>
        <CardHead />
        <CardsWithHeading data={DesignCardData[0]} />
        <CardsWithSubheading data={DesignCardData[1]} />
        <CardsWithImages data={DesignCardData[2]} />
        <NewCard data={DesignCardData[3]}/>
      </div>
    </main>
  );
};

export default Card;
