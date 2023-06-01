import React from "react";
import PropTypes from "prop-types";
import "./Hero.css";
import Button from "../Button/Button";

const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero">
      {title && <h1>{title}</h1>}
      {subtitle && <h3>{subtitle}</h3>}
      <div className="button">
        <button onClick={Button}>Button</button>
      </div>
    </div>
  );
};
// const Lists = () => {
//   const [state, setState] = useState("Button");
//   return (
//     <div>
//       <h2>Potrtfolio</h2>
//       <p>
//         Sugalvojau parodyti kelionių nuotraukas Jums visiems. Žiūrėkit ir
//         atraskit naujus pasaulius
//       </p>
//       <button onClick={() => setState("New Button")}>{state}</button>
//     </div>
//   );
// };

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;
