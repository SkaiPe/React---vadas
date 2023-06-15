import PropTypes from "prop-types";
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
  //tiesiog įdedam
  color: PropTypes.oneOf(["", "error", "success"]),
};

Button.defaultProps = {
  className: "",
  variant: "contained",
  //nurodom spalvą erorui
  color: "",
};

export default Button;
