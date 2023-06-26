import PropTypes from "prop-types";
import { PALETTE } from "../../shared/theme/constants";

const Alert = ({ color, children }) => {
  const getColorStyle = () => {
    switch (color) {
      case PALETTE.light:
        return {
          backgroundColor: "#FCFCFD",
          color: "#416694",
          border: "1px solid #F3F5F6",
        };
      case PALETTE.dark:
        return {
          backgroundColor: "#CED4DA",
          color: "#000000",
          border: "1px solid #CED4DA",
        };
      case PALETTE.primary:
        return {
          backgroundColor: "#CFE2FF",
          color: "#79a7ff",
          border: "1px solid #2B6EFD",
        };
      case PALETTE.secondary:
        return {
          backgroundColor: "#E2E3E5",
          color: "#8c959e",
          border: "1px solid #6C757D",
        };
      case PALETTE.success:
        return {
          backgroundColor: "#D1E7DD",
          color: "#4bbf7c",
          border: "1px solid #288754",
        };
      case PALETTE.danger:
        return {
          backgroundColor: "#F8D7DA",
          color: "#d76c77",
          border: "1px solid #DC3545",
        };
      case PALETTE.warning:
        return {
          backgroundColor: "#FFF3CD",
          color: "#E6AC44",
          border: "1px solid #F9C108",
        };
      case PALETTE.info:
        return {
          backgroundColor: "#9EEAF9",
          color: "#416694",
          border: "1px solid #44CAEF",
        };
      default:
        return {};
    }
  };

  const alertStyle = {
    padding: "15px",
    margin: "15px",
    borderRadius: "10px",
    ...getColorStyle(),
  };

  return <div style={alertStyle}>{children}</div>;
};

Alert.propTypes = {
  color: PropTypes.oneOf(Object.values(PALETTE)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Alert;
