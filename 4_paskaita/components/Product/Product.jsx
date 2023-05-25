import PropTypes from "prop-types";
import "./Product.css";

// naujesnis būdas: variant = "text"
const Product (props)  {image, title, price, description, availability, category } = props
  return (
     <div className="product">
        <img src ={"/components/golf"} alt={golf}/>
        <h2>{title}</h2>
        <p>Price: {price}</p>
        <p>{description}</p>
        <p>Availability: {availability}</p>
        <p>Category: {category}</p>
     </div>
  );
}

Product.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
};

// senesnis būdas
// Button.defaultProps = {
//   variant: "text",
// };

export default Product;


={
    <div>
      The little dazzling battery-powered car will be flying around
      streets circuits.
      <br />
      <br />
      The Mini will share duties with the BMW i8 Roadster which was
      revealed by Brooklyn Beckham in Mexico last year.
      <br />
      <br />
      The new safety car will appear at the next two races in Rome.
    </div>
  }