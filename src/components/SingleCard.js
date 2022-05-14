import "./SingleCard.css";

const SingleCard = ({ card, handleChoice }) => {
  const handleClick = (card) => {
    handleChoice(card);
  };

  return (
    <div className="card" key={card.id}>
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
