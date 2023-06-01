import PropTypes from "prop-types";
import "./Button.css";

// naujesnis būdas: variant = "text"
const Button = ({ title, variant = "text" }) => {
  return <button className={`btn ${variant}`}>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
};

export default Button;
