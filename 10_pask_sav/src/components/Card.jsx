import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ url, title }) => {
  return (
    <div className="cardContainer">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
