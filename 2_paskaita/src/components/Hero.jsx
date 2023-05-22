//Sukurkite Hero komponentą kuris turės du props: title ir subtitle.
//Jei title arbe subtitle nepaduotas - h1 arba h2 elementai net nesusikurs.

import PropTypes from "prop-types";

const Hero = (props) => {
  return props.title && props.subtitle ? (
    <div className="hero">
      <h1>{props.title}</h1>
      <h2> {props.subtitle}</h2>
    </div>
  ) : (
    <></>
  );
};

Hero.propTypes = {
  div: PropTypes.string.isRequired,
};

export default Hero;
