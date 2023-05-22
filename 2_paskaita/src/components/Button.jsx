// Sukurkite komponentą Button kuris turės props title ir variant.
// variant parametras gali būti: “text”, “contained” arba “outlined”.
// Padavus skirtingą parametrą turi atsivaizduoti skirtingos spalvos mygtukas
import React from "react";
import PropTypes from "prop-types";

function Button({ title, variant }) {
  let buttonStyle = "";

  if (variant === "text") {
    buttonStyle = "text-button";
  } else if (variant === "contained") {
    buttonStyle = "contained-button";
  } else if (variant === "outlined") {
    buttonStyle = "outlined-button";
  }

  return <button className={buttonStyle}>{title}</button>;
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]).isRequired,
};

export default Button;
