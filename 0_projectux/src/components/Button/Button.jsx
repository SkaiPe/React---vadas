import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
import "./Button.scss";

const Button = ({ className, children, variant, ...props }) => {
  // styled-button outlined
  return (
    <button className={`styled-button ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["contained", "outlined"]),
};

Button.defaultProps = {
  className: "",
  variant: "contained",
};

export default Button;
