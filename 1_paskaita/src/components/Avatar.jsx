import PropTypes from "prop-types";

const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
  Math.random() * 256
)}, ${Math.floor(Math.random() * 256)})`;

const divStyle = {
  fontSize: "1.5rem",
  borderRadius: "50%", //padaro pvaliu
  background: randomColor,
  padding: "10px", //padaro tarpus iš vidaus
  margin: "10px",
  display: "flex", //naudoti šitą apvaliam
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36, //paskut, 6 kodo eilutes, padario apvaliai
};
const Avatar = (props) => {
  // name = paima "Rokas Andreikenas"
  const name = props.name
    .split(" ") // ["Rokas", "Andreikenas"]
    .map((word) => word[0]) // eina cikliškai["R", "A"]
    .join("") // "RA" paima masuvo el. ir susdeda
    .toUpperCase(); // RA => RA padaro didžiasiais
  return <div style={divStyle}>{name}</div>;
};

Avatar.propTypes = {
  name: PropTypes.string,
};

export default Avatar;
