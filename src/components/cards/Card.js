import CardHead from "../../utils/components/CardHead";
import CardsWithHeading from "../../utils/components/HeadingCards";
import CardsWithSubheading from "../../utils/components/SubHeadingCards";
import CardsWithImages from "../../utils/components/ImageCards";
import NewCard from "../../utils/components/NewCard";

import DesignCardData from "../../utils/carddata/DesignCardData";
import PrototipCardData from "../../utils/carddata/PrototipCardData";
import TrelloCardData from "../../utils/carddata/TrelloCardData";
import TestCardData from "../../utils/carddata/TestCardData";
const Card = () => {
  return (
    <main>
      <div>
        <CardHead name={"Design"} />
        {DesignCardData.map((card, i) => {
          return (
            <div key={i}>
             {card.type === "heading-card" && <CardsWithHeading data={card} /> }
              {card.type === "card-with-subheading" && <CardsWithSubheading data={card} />}
              {card.type === "card-with-img" && <CardsWithImages data={card} />}
              {card.type === "card-with-addnew" && <NewCard data={DesignCardData[3]} />}
            </div>
          );
        })}
      </div>

      <div>
        <CardHead name={"Prototip"} />
        {PrototipCardData.map((card, i) => {
          return (
            <div key={i}>
             {card.type === "heading-card" && <CardsWithHeading data={card} /> }
              {card.type === "card-with-subheading" && <CardsWithSubheading data={card} />}
              {card.type === "card-with-img" && <CardsWithImages data={card} />}
              {card.type === "card-with-addnew" && <NewCard data={DesignCardData[3]} />}
            </div>
          );
        })}
      </div>

      <div>
        <CardHead name={"Trello"} />
        {TrelloCardData.map((card, i) => {
          return (
            <div key={i}>
             {card.type === "heading-card" && <CardsWithHeading data={card} /> }
              {card.type === "card-with-subheading" && <CardsWithSubheading data={card} />}
              {card.type === "card-with-img" && <CardsWithImages data={card} />}
              {card.type === "card-with-addnew" && <NewCard data={DesignCardData[3]} />}
            </div>
          );
        })}
      </div>

      <div>
        <CardHead name={"Test"} />
        {TestCardData.map((card, i) => {
          return (
            <div key={i}>
             {card.type === "heading-card" && <CardsWithHeading data={card} /> }
              {card.type === "card-with-subheading" && <CardsWithSubheading data={card} />}
              {card.type === "card-with-img" && <CardsWithImages data={card} />}
              {card.type === "card-with-addnew" && <NewCard data={DesignCardData[3]} />}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Card;
