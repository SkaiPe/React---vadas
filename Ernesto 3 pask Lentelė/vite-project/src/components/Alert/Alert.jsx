import PropTypes from "prop-types";
import { StyledAlert } from "./AlertStyle";

const Alert = ({ color, text }) => {
  return <StyledAlert color={color}>{text}</StyledAlert>;
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
export default Alert;
