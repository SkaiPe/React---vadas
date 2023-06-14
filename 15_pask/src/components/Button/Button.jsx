import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ className, children, ...props }) => {
  //styled-button outlined
  return (
    <button className={`styled-button ${className}`} {...props}>
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
